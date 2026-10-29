.PHONY: install dev build preview lint clean

# Install dependencies
install:
	npm install

# Dev server (src-v2/, index.html) — this is what ships to production
dev:
	npm run dev

# Production build — builds src-v2/ via index.html
build:
	npm run build

# Preview the production build locally
preview:
	npm run preview

lint:
	npm run lint

clean:
	rm -rf dist node_modules
