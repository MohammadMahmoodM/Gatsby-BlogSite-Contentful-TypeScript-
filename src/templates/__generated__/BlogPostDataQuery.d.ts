/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostDataQuery
// ====================================================

export interface BlogPostDataQuery_contentfulPost_body {
  json: any | null;
}

// export interface BlogPostDataQuery_contentfulPost_featuredImage_fluid {
//   base64: string | null;
//   aspectRatio: number;
//   src: string;
//   srcSet: string;
//   sizes: string;
// }

// export interface BlogPostDataQuery_contentfulPost_featuredImage {
//   fluid: BlogPostDataQuery_contentfulPost_featuredImage_fluid | null;
// }

// export interface BlogPostDataQuery_contentfulPost_author_bio {
//   bio: string | null;
// }

// export interface BlogPostDataQuery_contentfulPost_author_profilePicture_fluid {
//   base64: string | null;
//   aspectRatio: number;
//   src: string;
//   srcSet: string;
//   sizes: string;
// }

// export interface BlogPostDataQuery_contentfulPost_author_profilePicture {
//   fluid: BlogPostDataQuery_contentfulPost_author_profilePicture_fluid | null;
// }

// export interface BlogPostDataQuery_contentfulPost_author {
//   name: string | null;
//   bio: BlogPostDataQuery_contentfulPost_author_bio | null;
//   profilePicture: BlogPostDataQuery_contentfulPost_author_profilePicture | null;
// }

export interface BlogPostDataQuery_contentfulPost {
  title: string | null;
  // publishedDate: any | null;
  // body: BlogPostDataQuery_contentfulPost_body | null;
  // featuredImage: BlogPostDataQuery_contentfulPost_featuredImage | null;
  // author: BlogPostDataQuery_contentfulPost_author | null;
}

export interface BlogPostDataQuery {
  contentfulPost: BlogPostDataQuery_contentfulPost | null;
}

export interface BlogPostDataQueryVariables {
  slug: string;
}
