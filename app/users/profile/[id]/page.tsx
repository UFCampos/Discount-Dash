import Profile from "@/components/profile/profile";

const ProfilePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <Profile id={id} />;
};

export default ProfilePage;
