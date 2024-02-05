#[starknet::contract]
mod Data {
    use rand::Rng;

    // Function to calculate the greatest common divisor (gcd)
    fn gcd(x: u256, y: u256) -> u256 {
        if y.is_zero() {
            x.clone()
        } else {
            gcd(y, (x % y))
        }
    }

    // Function to calculate the least common multiple (lcm)
    fn lcm(x: u256, y: u256) -> u256 {
        (x * y) / gcd(x, y)
    }

    // Key generation function
    fn generate_key_pair() -> (u256, u256, u256) {
        let mut rng = rand::thread_rng();

        // Step 1: Pick two large prime numbers p and q
        let p: Integer = Integer::from(rng.gen_biguint(512).to_str_radix(10));
        let q: Integer = Integer::from(rng.gen_biguint(512).to_str_radix(10));

        // Step 2: Confirm gcd(pq, (p-1)(q-1)) is 1
        let n = p * q;
        let phi = lcm((p - 1), (q - 1));

        // Ensure gcd(pq, (p-1)(q-1)) is 1
        if gcd(n, phi) != 1 {
            return generate_key_pair();
        }

        // Step 3: Compute lambda (lcm(p-1, q-1))
        let lambda = lcm((p - 1), (q - 1));

        // Public key: n, Private key: lambda
        (n, p, q)
    }

    // Encryption function
    fn encrypt(message: u256, public_key: u256, n: u256) -> u256 {
        let r: Integer = rand::thread_rng().gen_range(Integer::from(1), n);

        // Compute ciphertext: c = g^m * r^n mod n^2
        (message.pow_mod_ref(n, (r * n)), n * n)
    }

    // Decryption function
    fn decrypt(ciphertext: u256, private_key: u256, n: u256) -> u256 {
        // Compute plaintext: L(c^lambda mod n^2)
        ciphertext.pow_mod_ref(private_key, (n * n))
    }

    #[cfg(test)]
    mod tests {
        use super;

        #[test]
        fn test_encryption_decryption() {
            let message = Integer::from(42);

            let (n, _, _) = generate_key_pair();

            let ciphertext = encrypt(message, n, n);
            let decrypted_message = decrypt(ciphertext, n, n);

            assert_eq!(message, decrypted_message);
        }
    }
}
