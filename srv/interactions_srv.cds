using { company.db as company  } from '../db/schema';

service Services {
    entity Customers as projection on company.Customers;
}