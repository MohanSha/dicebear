import type Options from './options';
import type Random from '@dicebear/avatars/lib/random';
import * as paths from './paths';
import * as utils from './utils';
import * as colors from './colors';

export default function (random: Random, options: Options = {}) {
  let skinType = paths.skin.default;
  let skinColor = utils.getSkinColor(options, random);
  let topType = utils.getTopType(options, random);
  let hatColor = utils.getHatColor(options, random);
  let hairColor = utils.getHairColor(options, random);
  let facialHairType = utils.getFacialHairType(options, random);
  let facialHairColor = utils.getFacialHairColor(options, random);
  let clotheType = utils.getClotheType(options, random);
  let clotheColor = utils.getClotheColor(options, random);
  let eyeType = utils.getEyeType(options, random);
  let eyebrowType = utils.getEyebrowType(options, random);
  let mouthType = utils.getMouthType(options, random);

  const group = (content: string, x: number, y: number) => {
    return `<g transform="translate(${x}, ${y})">${content}</g>`;
  };

  let content = `
  ${group(skinType(skinColor), 40, 36)}
  ${group(skinType(clotheColor), 40, 36)}
  ${group(skinType(skinColor), 40, 36)}
  ${group(skinType(skinColor), 40, 36)}
  ${group(skinType(skinColor), 40, 36)}
  ${group(skinType(skinColor), 40, 36)}
  ${group(skinType(skinColor), 40, 36)}
  ${group(skinType(skinColor), 40, 36)}
  ${group(skinType(skinColor), 40, 36)}
  ${group(skinType(skinColor), 40, 36)}
  `;

  if (options.style === 'circle') {
    content = `
    <path fill="#fff" d="M0 0h280v280H0z"/>
    <path d="M260 160c0 66.274-53.726 120-120 120S20 226.274 20 160 73.726 40 140 40s120 53.726 120 120z" fill="${
      options.background ?? colors.palette.blue01
    }"/>
    <mask id="a" maskUnits="userSpaceOnUse" x="8" y="0" width="264" height="280">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M272 0H8v160h12c0 66.274 53.726 120 120 120s120-53.726 120-120h12V0z" fill="#fff"/>
    </mask>
    <g mask="url(#a)">
    ${content}
    </g>
    `;
  }

  options.background = undefined;

  return `
    <svg width="280" height="280" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${content}
    </svg>
  `;
}
