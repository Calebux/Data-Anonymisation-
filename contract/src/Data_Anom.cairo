#[starknet::contract]
mod Data_Anom {
    use starknet::ContractAddress;

// Struct to represent the original data
#[storage]
struct Storage{
    
}


struct Person {
    name: String,
    age: u32,
}

// Function to anonymize data
#[external(v0)]
fn anonymize_data(original_data: Person, name_mapping:'string'u32;) -> Result<Vec<(String, u32)>, 'static str'> {
    if original_data.is_empty() || name_mapping.is_empty() {
        return Err("Both original_data and name_mapping must not be empty");
    }

    let mut rng = rand::thread_rng();
    let mut anonymized_data = Vec::new();

    for (index, person) in original_data.iter().enumerate() {
        let anonymized_name = name_mapping
            .get(index)
            .and_then(|&new_name| new_name.map(|s| s.to_string()))
            .unwrap_or_else(|| format!("User_{}", index + 1));

        let anonymized_age = (person.age / 5) * 5 + rng.gen_range(0..5); // Round ages

        anonymized_data.push((anonymized_name, anonymized_age));
    }

    Ok(anonymized_data)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_anonymize_data() {
        // Original data
        let original_data = vec![
            Person { name: "Alice".to_string(), age: 28 },
            Person { name: "Bob".to_string(), age: 35 },
            Person { name: "Carol".to_string(), age: 22 },
            Person { name: "David".to_string(), age: 40 },
        ];

        // Array of replacement names
        let name_mapping = [
            Some("John"),
            Some("Jane"),
            Some("Mike"),
            Some("Sara"),
            None, // Intentionally short array to test handling
        ];

        // Anonymize the data
        let result = anonymize_data(original_data.clone(), &name_mapping);

        // Check if the result is Ok
        assert!(result.is_ok());

        // Check if the number of records is the same
        let anonymized_data = result.unwrap();
        assert_eq!(original_data.len(), anonymized_data.len());

        // Check if ages are rounded
        for (_, age) in anonymized_data.iter() {
            assert_eq!(age % 5, 0);
        }
    }

    #[test]
    fn test_anonymize_data_empty_input() {
        // Empty original data and empty name mapping
        let result = anonymize_data(vec![], []);
        assert!(result.is_err());
        assert_eq!(result.err(), Some("Both original_data and name_mapping must not be empty"));

        // Non-empty original data and empty name mapping
        let result = anonymize_data(vec![Person { name: "Alice".to_string(), age: 28 }], []);
        assert!(result.is_err());
        assert_eq!(result.err(), Some("Both original_data and name_mapping must not be empty"));

        // Empty original data and non-empty name mapping
        let result = anonymize_data(vec![], [Some("John")]);
        assert!(result.is_err());
        assert_eq!(result.err(), Some("Both original_data and name_mapping must not be empty"));
    }
}

fn main() {
    // Original data
    let original_data = vec![
        Person { name: "Alice".to_string(), age: 28 },
        Person { name: "Bob".to_string(), age: 35 },
        Person { name: "Carol".to_string(), age: 22 },
        Person { name: "David".to_string(), age: 40 },
    ];

    // Array of replacement names
    let name_mapping = [
        Some("John"),
        Some("Jane"),
        Some("Mike"),
        Some("Sara"),
        None, // Intentionally short array to test handling
    ];

    // Anonymize the data
    match anonymize_data(original_data.clone(), &name_mapping) {
        Ok(anonymized_data) => {
            // Display original data
            println!("Original Data:");
            println!("{: <10} | {: <5}", "Name", "Age");
            for person in original_data.iter() {
                println!("{: <10} | {: <5}", person.name, person.age);
            }

            // Display anonymized data
            println!("\nAnonymized Data:");
            println!("{: <15} | {: <15}", "Anonymized Name", "Anonymized Age");
            for (name, age) in anonymized_data.iter() {
                println!("{: <15} | {: <15}", name, age);
            }
        }
        Err(err) => println!("Error: {}", err),
    }
}




//
