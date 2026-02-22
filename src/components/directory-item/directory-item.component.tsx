import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  Body,
  BackgrounImage,
} from './directory-item.styles';
import { DirectoryCategory } from '../directory/directory.component';

type DirectioryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectioryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgrounImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;