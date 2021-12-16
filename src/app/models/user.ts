export interface UserLoginModel {
  account: string;
  password: string;
  remember: boolean;
}

export interface UserInfoModel {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  events_url: string;
  followers: string;
  followers_url: string;
  following: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: string;
  html_url: string;
  id: string;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: string;
  public_repos: string;
  received_events_url: string;
  repos_url: string;
  site_admin: string;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
  updated_at: string;
  url: string;
}

export interface FiltersUserModel {
  name: '';
  sex: '';
}

export interface RandomUserModel {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
}
