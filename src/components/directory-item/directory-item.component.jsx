import { DirectoryItemContainer, Body, BackgrounImage } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {

  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <BackgrounImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;