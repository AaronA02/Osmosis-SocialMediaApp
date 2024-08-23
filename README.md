<h1>Osmosis - Social Media Application</h1>
<br/>
<h3>Overview</h3>
<br/>
Osmosis is a modern social media web application built with a robust tech stack aimed at providing a seamless and interactive user experience. This project leverages cutting-edge technologies and follows best practices in software development to ensure scalability, performance, and security.
<br/>

<h3>Tech Stack</h3>
<h4 classname="bold">Frontend</h4>
  <ul>
    <li>React: A JavaScript library for building user interfaces.</li>
    <li>Next.js: A React framework with hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.</li>
    <li>TypeScript: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</li>
    <li>Tailwind CSS: A utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design, directly in your markup.</li>
  </ul>

<h4 classname="bold">Backend</h4>
  <ul>
    <li>Prisma: A next-generation ORM that can be used to build GraphQL servers, REST APIs, microservices & more.</li>
    <li>Lucia Authentication: A secure and flexible user authentication library, with support for various adapters, including Prisma.</li>
    <li>UploadThing: A seamless file upload solution for modern web applications, integrated with server-side rendering in Next.js.</li>
  </ul>
  
<h4 classname="bold">State Management</h4>
<ul>
  <li>React Query: For fetching, caching, synchronizing, and updating server state in React applications.</li>
</ul>

<h4 classname="bold">Other Tools</h4>
  <ul>
    <li>Zod: A TypeScript-first schema declaration and validation library.</li>
    <li>Arctic: For integrating Google authentication into the application.</li>
    <li>Tanstack React Query Devtools: Development tool for debugging React Query.</li>
  </ul>

<h3>Features</h3>
<h4>Custom Hooks</h4>
<ul>
  <li>useDebounce: Debounces a value to limit the rate of updates, enhancing performance and user experience.</li>
  <li>useFollowerInfo: Fetches and caches follower information for a user using React Query.</li>
  <li>useSession: Provides a context-based hook to access session data, ensuring secure access to authenticated user information.</li>
</ul>


## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/osmosis-socialmediaapp.git
2. **Navigate to the project directory**:
   ```bash
   cd osmosis-socialmediaapp
3. **Install the dependencies**:
   ```bash
   npm install
4. **Set up the environment variables and Prisma**:
   ```bash
   npx prisma migrate dev
5. **Run the development server**:
   ```bash
   npm run dev

