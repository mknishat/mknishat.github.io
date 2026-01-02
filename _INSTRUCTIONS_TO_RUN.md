# How to Run This Jekyll Site

## The Problem
Your Mac's system Ruby (2.6.10) is too old and has ARM64 compatibility issues with nokogiri.

## Solution 1: Install Homebrew Ruby (RECOMMENDED)

1. Install Homebrew Ruby:
   ```bash
   brew install ruby
   ```

2. Add Homebrew Ruby to your PATH (add this to your ~/.zshrc):
   ```bash
   export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
   export PATH="/opt/homebrew/lib/ruby/gems/3.3.0/bin:$PATH"
   ```

3. Reload your shell:
   ```bash
   source ~/.zshrc
   ```

4. Verify Ruby version (should be 3.x):
   ```bash
   ruby --version
   ```

5. Clean and reinstall gems:
   ```bash
   cd ~/Documents/nishat_via/gmiqbal.github.io
   rm -rf vendor/bundle Gemfile.lock .bundle
   gem install bundler
   bundle install
   ```

6. Run Jekyll:
   ```bash
   bundle exec jekyll serve -l -H localhost
   ```

7. Open your browser to: http://localhost:4000

## Solution 2: Use Docker (if you have Docker installed)

1. Build the Docker image:
   ```bash
   docker build -t jekyll-site .
   ```

2. Run the container:
   ```bash
   docker run -p 4000:4000 --rm -v $(pwd):/usr/src/app jekyll-site
   ```

3. Open your browser to: http://localhost:4000

## Solution 3: Build once and serve with Python

1. Temporarily comment out jemoji in Gemfile (already done)

2. Build the site:
   ```bash
   bundle exec jekyll build
   ```

3. Serve with Python:
   ```bash
   cd _site && python3 -m http.server 4000
   ```

4. Open your browser to: http://localhost:4000

---

**Note:** I recommend Solution 1 (Homebrew Ruby) as it's the most reliable for long-term development.
