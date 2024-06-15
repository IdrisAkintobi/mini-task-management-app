# Task Management Application

This is a simple Task Management Application built with Next.js and TypeScript. The application allows users to manage their daily tasks by adding, editing, deleting, and marking tasks as complete.

## Features

- Add new tasks with a title and due date.
- Edit existing tasks to update details.
- Delete tasks that are no longer needed.
- Mark tasks as complete and view a list of completed tasks.
- Persist tasks using local storage.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed. You can download Node.js from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```
2. Install dependencies:
   ```sh
   Copy code
   npm install
   ```

### Running the Application

1.  Start the development server:
    ```sh
    npm run dev
    ```
2.  ```
    Open http://localhost:3000 to view the application in the browser.
    ```

### Testing the Application

1.  Run tests:
    ```sh
    npm test
    ```

### Project Structure

```
task-management-app/
├── public/
├── src/
│   ├── components/
│   │   ├── TaskForm.tsx
│   │   ├── TaskList.tsx
│   ├── hooks/
│   │   └── useTasks.ts
│   ├── models/
│   │   └── Task.ts
│   ├── pages/
│   │   ├── completed.tsx
│   │   ├── index.tsx
│   ├── tests/
│   │   ├── TaskForm.test.tsx
│   │   └── TaskList.test.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
```

### Deployment

To build and deploy the application, you can use the following command:

```sh
    npm run build
```

This will create an optimized production build in the .next directory.
