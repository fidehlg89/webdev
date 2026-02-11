# Premium Minds - User Management WebDev

User management interface built with React 19 and Vite.

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Yarn](https://yarnpkg.com/) (v4+)

### Installation
```bash
# Clone the repository (if applicable)
# Navigate to the project directory
cd webdev

# Install dependencies
yarn install
```

### Development
```bash
# Start the development server
yarn dev
```

### Production
```bash
# Build for production
yarn build

# Preview production build
yarn preview
```

## 🛠 Tech Stack
- **Framework**: React 19 (Functional Components, Hooks)
- **Tooling**: Vite (Ultra-fast HMR)
- **Styling**: Vanilla CSS Modules (Scoped styles, Native Variables)
- **Context API**: Global state management (UI, Auth if needed)

## 📂 Architecture
The project follows a **Feature-based architecture** for better scalability:
- `/src/components/common`: Shared atomic UI components (Button, Input, Checkbox, Section).
- `/src/features`: Domain-specific features (Layout, User Management).
- `/src/styles`: Global themes, resets, and design tokens (variables.css).
- `/src/hooks`: Custom React hooks for shared logic.


