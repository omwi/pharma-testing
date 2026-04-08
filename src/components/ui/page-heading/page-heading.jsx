import MutedText from '../muted-text/muted-text';

export default function PageHeading({ title, description, className }) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <MutedText>{description}</MutedText>
    </div>
  );
}
