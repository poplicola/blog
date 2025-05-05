# Bootstrap Jekyll Blog - Installation Guide

This document provides detailed instructions for setting up your Bootstrap Jekyll Blog from scratch.

## Prerequisites

Before you begin, ensure that you have the following installed on your system:

### Required:

- **Ruby**: Jekyll requires Ruby version 2.5.0 or higher
  - Check your version: `ruby -v`
  - [Ruby Installation Guide](https://www.ruby-lang.org/en/documentation/installation/)

- **RubyGems**: The Ruby package manager
  - Check your version: `gem -v`
  - Usually comes with Ruby installation

- **GCC and Make**: Required for building native extensions
  - Check your versions: `gcc -v` and `make -v`
  - Windows: Use [MinGW](https://mingw.org/) or [WSL](https://docs.microsoft.com/en-us/windows/wsl/install)
  - macOS: Install with [Xcode Command Line Tools](https://mac.install.guide/ruby/4.html)
  - Linux: Install using your package manager (e.g., `apt install build-essential`)

- **Git**: For version control
  - Check your version: `git --version`
  - [Git Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Optional (for advanced features):

- **Node.js and npm**: For running the search index generator
  - Check your versions: `node -v` and `npm -v`
  - [Node.js Installation Guide](https://nodejs.org/en/download/)

## Installation Steps

Follow these steps to get your Bootstrap Jekyll Blog up and running:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/bootstrap-jekyll-blog.git
cd bootstrap-jekyll-blog
```

### 2. Install Jekyll and Bundler

```bash
gem install jekyll bundler
```

### 3. Install Dependencies

```bash
bundle install
```

### 4. Generate Search Index (Optional)

If you want to use the search functionality:

```bash
# Install required NPM packages
npm install gray-matter marked striptags

# Generate the search index
node scripts/generate-search-index.js
```

### 5. Test Your Site Locally

```bash
bundle exec jekyll serve
```

Your site should now be running at [http://localhost:4000](http://localhost:4000)

## System-Specific Installation Notes

### Windows

1. Consider using [RubyInstaller](https://rubyinstaller.org/) which includes RubyGems
2. You might need to install the MSYS2 development toolchain for native extensions
3. If you encounter issues, consider using Windows Subsystem for Linux (WSL)

### macOS

1. It's recommended to use a Ruby version manager like [rbenv](https://github.com/rbenv/rbenv) or [RVM](https://rvm.io/)
2. Install Xcode Command Line Tools:
   ```bash
   xcode-select --install
   ```
3. Install Ruby with homebrew:
   ```bash
   brew install ruby
   ```

### Linux (Ubuntu/Debian)

1. Install required packages:
   ```bash
   sudo apt-get update
   sudo apt-get install ruby-full build-essential zlib1g-dev
   ```
2. Avoid installing gems as root:
   ```bash
   echo '# Install Ruby Gems to ~/.gems' >> ~/.bashrc
   echo 'export GEM_HOME="$HOME/.gems"' >> ~/.bashrc
   echo 'export PATH="$HOME/.gems/bin:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```

## Troubleshooting Installation

### Common Issues

1. **Ruby version too old**:
   - Use a Ruby version manager to install a newer version
   - For rbenv: `rbenv install 3.1.0 && rbenv global 3.1.0`
   - For RVM: `rvm install 3.1.0 && rvm use 3.1.0`

2. **Permission errors when installing gems**:
   - Don't use `sudo` with gem install
   - Configure RubyGems to install gems in your user directory:
     ```bash
     echo 'export GEM_HOME="$HOME/.gems"' >> ~/.bashrc
     echo 'export PATH="$HOME/.gems/bin:$PATH"' >> ~/.bashrc
     source ~/.bashrc
     ```

3. **Missing headers during native extension builds**:
   - Install development packages for your system
   - Ubuntu/Debian: `sudo apt-get install ruby-dev`
   - Fedora/CentOS: `sudo dnf install ruby-devel`
   - macOS: `xcode-select --install`

4. **Jekyll command not found**:
   - Ensure the gems bin directory is in your PATH
   - Try reinstalling: `gem install jekyll bundler`

5. **Bundler version conflicts**:
   - Update bundler: `gem update bundler`
   - Use a specific bundler version: `gem install bundler -v "~>2.3.0"`

## Next Steps

After successfully installing your Bootstrap Jekyll Blog, refer to the [USAGE_GUIDE.md](USAGE_GUIDE.md) for instructions on:

- Customizing your blog
- Creating and managing content
- Deploying to GitHub Pages
- Advanced configuration options

## Getting Help

If you encounter problems during installation:

- Check the [Jekyll troubleshooting page](https://jekyllrb.com/docs/troubleshooting/)
- Visit the [Jekyll forum](https://talk.jekyllrb.com/)
- Search or ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/jekyll)
