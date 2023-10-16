/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: [
         "encrypted-tbn0.gstatic.com",
         "res.cloudinary.com",
         "images.unsplash.com",
         "cf.bstatic.com",
         "encrypted-tbn2.gstatic.com",
      ],
   },
};

module.exports = nextConfig;
