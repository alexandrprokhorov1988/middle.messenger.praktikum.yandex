import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { fileInputTemplate } from './FileInput.template';
import { FileInputProps } from './FileInput.types';

export default class FileInput extends Block<FileInputProps> {
  public constructor(props: FileInputProps) {
    super(
      'div',
      {
        ...props,
      },
    );
  }

  public render() {
    return this.compile(compile(fileInputTemplate), { ...this.props });
  }
}
