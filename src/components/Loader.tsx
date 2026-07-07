import { Logo } from './Logo';
import './Loader.css';

export function Loader({ visible }: { visible: boolean }) {
  return (
    <div className={`loader ${visible ? '' : 'loader--hidden'}`} aria-hidden={!visible}>
      <div className="loader__mark">
        <Logo size={48} />
      </div>
      <div className="loader__bar">
        <div className="loader__bar-fill" />
      </div>
    </div>
  );
}
