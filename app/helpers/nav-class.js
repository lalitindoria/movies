import { helper } from '@ember/component/helper';

export function navClass(params/*, hash*/) {
  let className = 'nav-link';
  if (params[0] === params[1]) className += ' active';
  return className;
}

export default helper(navClass);
