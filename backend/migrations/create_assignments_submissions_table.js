export const assignmentSubmission = `CREATE TABLE IF NOT EXISTS assignment_submission (
    id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    course_id INT NOT NULL,
    user_id INT NOT NULL,
    assignment_id INT NOT NULL,
    grade VARCHAR NOT NULL,
    status VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);`;
