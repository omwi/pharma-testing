import Tag from '@/components/ui/tag/tag';

import * as styles from './process-tags-container.module.css';

export default function ProcessTagsContainer({ tags }) {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => (
        <Tag text={tag} />
      ))}
    </div>
  );
}
