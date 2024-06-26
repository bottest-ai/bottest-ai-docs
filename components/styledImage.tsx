import Image from 'next/image';

function StyledImage({ path }) {
  return (
    <Image
      src={path}
      alt="Image"
      width={0}
      height={0}
      style={{ width: "100%", height: "auto", borderRadius: "20px", marginTop: "20px", marginBottom: "10px", border: "2px dashed #388AEB" }}
    />
  )
}

export default StyledImage;
