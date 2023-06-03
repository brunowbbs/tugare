declare module "react-reveal" {
  export const Fade: React.ComponentType<FadeProps>;
  export const Slide: React.ComponentType<SlideProps>;
  export const Zoom: React.ComponentType<ZoomProps>;
  export const Bounce: React.ComponentType<BounceProps>;

  export interface FadeProps extends React.HTMLAttributes<HTMLElement> {
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  }

  export interface SlideProps extends React.HTMLAttributes<HTMLElement> {
    bottom?: boolean;
  }

  export interface ZoomProps extends React.HTMLAttributes<HTMLElement> {
    bottom?: boolean;
  }

  export interface BounceProps extends React.HTMLAttributes<HTMLElement> {
    bottom?: boolean;
  }
}
