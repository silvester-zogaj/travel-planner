const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
    modularizeImports: {
        "@mui/material": {
            transform: "@mui/material/{{member}}"
        },
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}"
        }
    }
};
