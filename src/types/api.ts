interface Profile {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

export type Account = {
  createdAt: string;
  avatar: string;
  Bio: string;
  jobTitle: string;
  profile: Profile;
  id: string;
};
