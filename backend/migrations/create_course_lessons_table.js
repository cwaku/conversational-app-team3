export const courseLesson = `CREATE TABLE IF NOT EXISTS course_lesson (
    id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    course_id INT NOT NULL,
    description TEXT NOT NULL,
    lesson_no INT NOT NULL,
    lesson_content TEXT NOT NULL,
    lesson_content_type VARCHAR NOT NULL,
    lesson_topic VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);`;
