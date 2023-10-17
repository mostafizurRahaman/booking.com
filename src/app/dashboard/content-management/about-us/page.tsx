import { useGetUserQuery } from "@/redux/api/authApi";

const AboutUs = () => {
  const { data } = useGetUserQuery(undefined);
  return (
    <div>
      <h1>About Us Page</h1>A
    </div>
  );
};

export default AboutUs;
