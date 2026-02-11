interface VideoPlaceholderProps {
  title: string;
}

export default function VideoPlaceholder({ title }: VideoPlaceholderProps) {
  return (
    <div className="video-placeholder">
      <div className="video-placeholder__play">&#9654;</div>
      <p className="video-placeholder__label">Animation here</p>
      <p className="video-placeholder__title">{title}</p>
    </div>
  );
}
