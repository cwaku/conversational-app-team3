export const users = `CREATE TABLE IF NOT EXISTS users (
    id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    fullName VARCHAR NOT NULL,
    city VARCHAR,
    email VARCHAR,
    phone VARCHAR,
    verified BOOLEAN DEFAULT false,
    role INT DEFAULT 0,
    password VARCHAR,
    auth_method VARCHAR,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
`;
