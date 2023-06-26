
// export const ButtonList = {
//     // signInRedButton : 'signInRedButton',
//     signInBlackButton : 'signInBlackButton',
//     playSmButton : 'playSmButton',
//     playLgButton : 'playLgButton',
//     grayButton : 'grayButton',
//     recoverButton : 'recoverButton',
//     myListButton : 'myListButton',
//     topButtons : 'topButtons',
//     categoriesButton : 'categoriesButton',
//     signInRedButton : {borderColor: '#e7e7e7', borderWidth: 2 }
// }

// const border = type === 'outlined' && { borderColor: '#e7e7e7', borderWidth: 2 }



// const large = width / 1.3
// const small = width / 2
// const btnSize = size === 'large' ? large : small
// const btnBgColor = type === 'filled' ? '#3f51b5' : 'transparent'
// const btnTextColor = type === 'filled' ? '#ffffff' : '#6371c2'
// const btnBorderRadius = bordered ? 30 : 5



// export default function getButtonStyles(type) {
//     const buttonStyles = [styles.container];
//     const textStyles = [styles.text];

// switch (type) {
//     case ButtonList.signInRedButton :
//       buttonStyles.push(styles.signInRedButton);
//       textStyles.push(styles.textWhite);
//       break;
//     case ButtonList.signInBlackButton:
//       buttonStyles.push(styles.signInBlackButton);
//       textStyles.push(styles.textSmokeWhite);
//       break;
//     case ButtonList.playSmButton:
//       buttonStyles.push(styles.playSmButton);
//       textStyles.push(styles.textBlack);
//       break;
//     case ButtonList.playLgButton:
//       buttonStyles.push(styles.playLgButton);
//       textStyles.push(styles.textBlack);
//       break;
//     case ButtonList.grayButton:
//       buttonStyles.push(styles.grayButton);
//       textStyles.push(styles.textWhite);
//       break;
//     case ButtonList.recoverButton:
//       textStyles.push(styles.recoverTextSize);
//       textStyles.push(styles.textSmokeWhite);
//       break;
//     case ButtonList.myListButton:
//       buttonStyles.push(styles.myListButton);
//       textStyles.push(styles.textWhite);
//       break;
//     case ButtonList.topButtons:
//       buttonStyles.push(styles.topButtons);
//       textStyles.push(styles.topButtonsText);
//       break;
//     case ButtonList.categoriesButton:
//       buttonStyles.push(styles.categoriesButton);
//       textStyles.push(styles.topButtonsText);
//       break;
//     default:
//       break;
//   }
//   return { buttonStyles, textStyles };
// }