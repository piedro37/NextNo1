import Image from 'next/image'

const Profile = () => (
  <Image
    src="/images/profile.png" // Route of the image file
    height={200} // Desired size with correct aspect ratio
    width={200} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

export default Profile