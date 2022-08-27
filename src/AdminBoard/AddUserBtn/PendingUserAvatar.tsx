import { Dispatch, SetStateAction } from "react";
import styled from "styled-components/macro";

const Avatar = styled.div`
  height: 10rem;
  width: 10rem;
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const NotFoundTxt = styled.div`
  color: gray;
  font-size: 1.2rem;
`;

type PropType = {
  imgUrl: string;
  hasImgErr: boolean;
  setHasImgErr: Dispatch<SetStateAction<boolean>>;
};

export default function PendingUserAvatar({
  imgUrl,
  hasImgErr,
  setHasImgErr,
}: PropType) {
  const handleImgErr = () => {
    setHasImgErr(true);
  };
  return (
    <Avatar>
      {imgUrl === "" ? (
        <NotFoundTxt>No image</NotFoundTxt>
      ) : hasImgErr ? (
        <NotFoundTxt>{"Image not found :("}</NotFoundTxt>
      ) : (
        <img src={imgUrl} alt="Your new hedgehog" onError={handleImgErr} />
      )}
    </Avatar>
  );
}
