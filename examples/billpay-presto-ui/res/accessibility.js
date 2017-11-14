const DEFAULT = "en_US";

const strings = {
  "en_US": {
    "SPLASHSCREEN_CONTENT": "Content",
    "SPLASHSCREEN_MAIN_TITLE": "Main Title",
    "SPLASHSCREEN_SUB_TITLE": "Sub Title",
    "CHOOSEOPERATORSCREEN_CONTENT": "Content",
    "CHOOSEOPERATORSCREEN_HEADER": "Header",
    "CHOOSEOPERATORSCREEN_HEADERTEXT": "HeaderText",
    "CHOOSEOPERATORSCREEN_OPERATOR_LIST": "Operator List",
    "CHOOSEOPERATORSCREEN_LIST_CONTENT": "List Content",
    "MOBILENUMBERSCREEN_SCREEN_2": "Screen 2",
    "MOBILENUMBERSCREEN_HEADERWITHARROW": "HeaderWithArrow",
    "MOBILENUMBERSCREEN_ICON": "Icon",
    "MOBILENUMBERSCREEN_HEADERTEXT": "HeaderText",
    "MOBILENUMBERSCREEN_SCREEN_CONTENT": "Screen Content",
    "MOBILENUMBERSCREEN_FORM_FIELD": "Form Field",
    "MOBILENUMBERSCREEN_ENTER_MOBILE_NUMBER": "Enter Mobile Number",
    "MOBILENUMBERSCREEN_NUMBER_FIELD": "Number Field",
    "MOBILENUMBERSCREEN_COUNTRY_CODE": "Country code",
    "MOBILENUMBERSCREEN_EDIT_TEXT": "Edit Text",
    "MOBILENUMBERSCREEN_PLACEHOLDER": "placeholder",
    "MOBILENUMBERSCREEN_SEPERATOR": "seperator",
    "MOBILENUMBERSCREEN_FORM_FIELD_COPY": "Form Field Copy",
    "MOBILENUMBERSCREEN_ENTER_RECHARGE_AMOUN": "Enter Recharge Amoun",
    "MOBILENUMBERSCREEN_GROUP": "Group",
    "MOBILENUMBERSCREEN_RUPEE_BLACK": "rupee/black",
    "MOBILENUMBERSCREEN_PLACEHOLDER2": "placeholder2",
    "MOBILENUMBERSCREEN_SPACE": "space",
    "MOBILENUMBERSCREEN_BUTTON": "Button",
    "MOBILENUMBERSCREEN_BUTTONTEXT": "ButtonText",
    "STATUSSCREEN_GROUP": "Group",
    "STATUSSCREEN_ILLUSTRATION": "Illustration",
    "STATUSSCREEN_GROUP_2": "Group 2",
    "STATUSSCREEN_SUCCESSLABEL": "SuccessLabel",
    "STATUSSCREEN_SUCCESSTEXT": "SuccessText",
    "HEADER_HEADER": "Header",
    "HEADER_HEADERTEXT": "HeaderText",
    "HEADERWITHARROW_HEADERWITHARROW": "HeaderWithArrow",
    "HEADERWITHARROW_ICON": "Icon",
    "HEADERWITHARROW_HEADERTEXT": "HeaderText",
    "OPERATOR_OPERATOR_LIST_ITEM": "Operator List Item",
    "OPERATOR_OPERATOR": "Operator",
    "OPERATOR_IC_SIM_CARD_BLACK_24PX": "ic_sim_card_black_24px",
    "OPERATOR_OPERATORTEXT": "OperatorText",
    "OPERATOR_RECTANGLE_2": "Rectangle 2",
    "BUTTON_BUTTON": "Button",
    "BUTTON_BUTTONTEXT": "ButtonText"
  }
}

module.exports = () => Object.assign({}, strings[DEFAULT], strings[window.LANGUAGE]);
