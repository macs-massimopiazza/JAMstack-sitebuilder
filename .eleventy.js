module.exports = function(eleventyConfig) {
    //Tell to 11ty what files to simply copy into public folder
    eleventyConfig.addPassthroughCopy('./src/style.css')
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/admin')

    return {
        dir: {
            input: "src", //Folder with main site source files
            output: "public" //Folder where the build will be created
        }
    }
}