## How to setup Tailwind CSS

Step 1: Install tailwindcss and @tailwindcss/cli via npm.

``` 
npm install tailwindcss @tailwindcss/cli
```

Step 2: create src/input.css to include:
```
@import "tailwindcss";
```

Step 3: Include the src/output.css file to your html

Step 4: Run the following command:
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```