// This script generates a search index for the Jekyll site
// Usage: node generate-search-index.js

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const striptags = require('striptags');
const { marked } = require('marked');

// Configuration
const POSTS_DIR = path.join(__dirname, '../_posts');
const OUTPUT_FILE = path.join(__dirname, '../assets/js/search-index.json');
const EXCERPT_LENGTH = 150;

// Function to process posts
async function processAllPosts() {
  try {
    // Read all files in the posts directory
    const files = fs.readdirSync(POSTS_DIR);
    
    // Filter out non-markdown files
    const markdownFiles = files.filter(file => 
      file.endsWith('.md') || file.endsWith('.markdown')
    );
    
    // Process each markdown file
    const searchData = markdownFiles.map(file => {
      // Read the file
      const filePath = path.join(POSTS_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Parse front matter
      const { data, content } = matter(fileContent);
      
      // Convert markdown to HTML and strip tags for indexing
      const htmlContent = marked(content);
      const strippedContent = striptags(htmlContent);
      
      // Create and format the post URL
      const date = new Date(data.date);
      const url = `/${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${file.replace(/\.(md|markdown)$/, '')}/`;
      
      // Create an excerpt
      const excerpt = strippedContent.substring(0, EXCERPT_LENGTH) + '...';
      
      // Format the date for display
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Return the post data for the index
      return {
        title: data.title,
        url: url,
        date: formattedDate,
        categories: data.categories ? data.categories.join(', ') : '',
        tags: data.tags ? data.tags.join(', ') : '',
        excerpt: excerpt,
        content: strippedContent
      };
    });
    
    // Write the search index to a file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchData, null, 2));
    console.log(`Search index generated with ${searchData.length} posts.`);
  } catch (error) {
    console.error('Error generating search index:', error);
  }
}

// Create the output directory if it doesn't exist
const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Run the process
processAllPosts();