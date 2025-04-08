/*
  # Initial Schema Setup for Study Platform

  1. New Tables
    - `modules`
      - `id` (serial primary key)
      - `title` (text)
      - `description` (text)
      - `introduction` (text)
      - `videoUrl` (text)
      - `pdfUrl` (text)
    
    - `questions`
      - `id` (serial primary key)
      - `moduleId` (integer, foreign key)
      - `question` (text)
      - `options` (text array)
      - `correctAnswer` (integer)
      - `explanation` (text)
    
    - `test_results`
      - `id` (serial primary key)
      - `userId` (uuid, foreign key)
      - `moduleId` (integer, foreign key)
      - `score` (integer)
      - `timeSpent` (integer)
      - `completed` (boolean)
      - `createdAt` (timestamp with time zone)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create modules table
CREATE TABLE modules (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  introduction TEXT NOT NULL,
  "videoUrl" TEXT NOT NULL,
  "pdfUrl" TEXT NOT NULL
);

-- Create questions table
CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  "moduleId" INTEGER REFERENCES modules(id),
  question TEXT NOT NULL,
  options TEXT[] NOT NULL,
  "correctAnswer" INTEGER NOT NULL,
  explanation TEXT NOT NULL
);

-- Create test_results table
CREATE TABLE test_results (
  id SERIAL PRIMARY KEY,
  "userId" UUID REFERENCES auth.users(id),
  "moduleId" INTEGER REFERENCES modules(id),
  score INTEGER NOT NULL,
  "timeSpent" INTEGER NOT NULL,
  completed BOOLEAN DEFAULT false,
  "createdAt" TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow authenticated users to read modules"
  ON modules
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to read questions"
  ON questions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow users to read their own test results"
  ON test_results
  FOR SELECT
  TO authenticated
  USING (auth.uid() = "userId");

CREATE POLICY "Allow users to insert their own test results"
  ON test_results
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = "userId");