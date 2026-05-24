export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/graphics");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/blog/posts.json");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
}
