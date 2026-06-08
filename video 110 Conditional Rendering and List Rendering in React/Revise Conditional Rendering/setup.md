 1. step :->Install Tailwind CSS

```
npm install tailwindcss @tailwindcss/vite
```

2. step :->Configure the Vite plugin

```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

3. step :->Import Tailwind CSS

```
@import "tailwindcss";
```