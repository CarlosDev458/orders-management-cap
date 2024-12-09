namespace company.db;

entity Customers {
    key ID : UUID;            
    Name : String(100);       
    Email : String(255);      
    Phone : String(15);       
    Address : String(255);    
    City : String(100);       
    Country : String(100);    
    CreatedAt : Timestamp;    
    UpdatedAt : Timestamp;    
}


