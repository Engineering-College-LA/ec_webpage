.PHONY: install dev dev-new build preview lint clean

# Install dependencies
install:
	npm install

# OLD design — this is what ships to production (src/, index.html)
dev:
	npm run dev

# NEW design — work in progress, dev only (src-v2/, new-index.html)
dev-new:
	npm run dev:new

# Production build — always builds the OLD design from src/
build:
	npm run build

# Preview the production build locally
preview:
	npm run preview

lint:
	npm run lint

clean:
	rm -rf dist node_modules
