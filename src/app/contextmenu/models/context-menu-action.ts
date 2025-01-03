export interface ContextMenuAction<T> {
  visible: (item: T) => boolean;
  click: (item: T) => void;
  html: (item: T) => string;
  disabled: (item: T) => boolean;
  divider: boolean;
}
