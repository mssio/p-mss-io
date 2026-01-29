import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: ["/"],
  },
});

// Match against pages that require authentication
// Leave this out if you want authentication on every page in your application
export const config = { matcher: ["/", "/generate", "/api/generate/:type"] };
