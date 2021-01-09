/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
    let l = 0, r = words.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        while (mid <= r && words[mid].length === 0) {
            // if (words[mid] === s) {
            //     return mid;
            // }
            mid++;
        }
        if (mid >= r) {
            r = Math.floor((l + r) / 2) - 1;
            continue;
        }
        if (words[mid] < s) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return words[l].length != 0 && words[l] === s ? l : -1;
};
console.log(findString(["", "", "", "", "AbHSZkLKTnHBbchUaS", "", "", "", "", "", "", "", "", "", "", "", "Ag kFlfSmsAEMy", "", "AsKLCqP", "", "", "", "", "", "AwNHxnNNZG", "", "", "", "", "", "", "", "BPwnIg", "", "CTZVBhsbvQpKHn", "DbWXiVetWyFeDu", "", "", "", "", "DdVm", "", "", "", "", "EIXK", "EUzGOV", "", "FBLOHPrpE", "GHMqgmMCXLkEBgU", "", "HPDGLlVDt", "", "", "", "", "", "", "HfF", "", "", "", "ILzzRaXUzNieYll", "", "", "", "", "", "", "", "", "IXO", "", "", "", "", "JMsO", "", "", "", "", "", "", "", "", "", "", "", "JNqzgSHitHRhdauLMcJ", "", "JZkNLIvaG", "", "", "KwRVFXYVJiueHvDHRTaJ", "", "", "LDTWBS", "", "", "", "", "", "", "LYN", "", "", "", "", "", "", "", "LpgNAXXV cWNYTwxo", "", "", "", "", "", "", "", "", "", "LxWJTErsIjyXjfCqrK", "", "", "", "", "", "", "", "", "MlJUQNiISaxtt", "", "", "", "", "", "", "", "", "", "", "O", "", "", "", "", "", "", "", "OHyIQptaYAfinbkjT", "", "", "", "", "", "", "", "", "", "", "", "OcQIESYXEmdykm", "", "", "", "", "", "", "", "", "Ol utzavtJOrPIK", "", "", "", "", "QLy", "", "", "", "", "", "QQZriWTlYYJgdlWl", "", "", "", "", "", "QhHySgWDIJwFtYP", "", "", "", "", "", "", "", "", "", "QiqwcedXKkVHDulp", "", "", "", "", "", "QtSvWSREnaYrrscc", "RHHeBMEnG nUX", "", "", "", "", "", "", "", "", "", "S", "", "", "", "", "", "", "", "", "", "SoULoFHOumjYMArBdiW", "", "", "", "", "SqHyxrJVNkrNaZG", "", "", "", "", "", "", "", "ThyUiuy", "", "", "Tu ac", "", "", "", "", "", "", "", "", "", "UGoOqhdXVzKl", "", "", "", "", "UbmA", "", "", "", "", "", "", "", "", "", "", "UsJhUmDujiOTntftsx", "", "", "", "", "", "", "", "", "", "", "V", "", "", "", "", "", "", "", "WEHisFZW wgmmVL", "", "", "", "", "", "", "", "", "", "", "", "WayOichMZsXpvJF", "", "WxVmzLgGjGlZOJwdzRd", "", "", "WzMjbVe WqjHOZJi", "", "", "", "", "", "", "", "", "", "", "", "XBVQZDHQT", "", "", "", "", "", "XMnsPtB AuMzDv", "", "XRNgMvqmhfjSfVVOP", "", "", "", "", "", "", "", "", "", "XYNh", "", "", "", "YfT", "", "", "", "", "", "", "", "", "", "", "", "amPIKYDmkUtUtFznRSvy", "", "", "", "", "", "", "", "", "", "bSs H MHwtgkOUzc", "", "", "", "cZhtYPrq ZpxZ", "", "", "", "", "", "", "dUGjmZGq", "e", "", "", "", "", "", "", "", "", "", "eWp", "epctu", "", "", "", "", "", "", "", "", "ezTPGIKrUmY", "", "", "", "", "", "", "", "", "", "", "fDnxFNxYyzUdQLc", "", "", "", "", "", "", "fFq", "", "", "", "", "", "", "", "", "", "", "fVjbEkHHU", "", "", "", "", "", "", "fux", "", "", "", "", "", "", "", "", "", "", "fwNIhmjYGktBo", "", "", "", "", "", "", "gEw", "", "", "hCisHtVxXZLjazN", "", "", "iqtlVbWLc", "", "", "jgLIRdgwDIaXioxoQkJn", "", "jpfhmJLfe", "", "", "", "kJEFz", "", "", "", "", "", "", "", "", "", "", "kKGFNPRtWNMY", "", "", "", "", "", "", "", "kXsm YJ", "", "", "", "kxjNfp c", "", "", "", "", "lnHVOerQcvgQEbBH", "", "", "", "", "", "mBsZUwwGmIsTwBUG", "", "mDMENtWiZwu", "", "miuxyF VvYebav", "", "", "", "", "", "nMWP", "", "", "", "", "", "", "", "", "", "", "", "nVbrbTsffMvICzx", "", "", "", "nYQuyy", "", "neMPLcFrptsISrhXBWe", "", "", "", "", "", "", "", "", "", "oAhJcIL", "", "", "", "", "ptybFCyrvqgy", "", "", "", "qVMPHyOgzIexxZ", "", "", "", "", "", "", "", "qvxuleCVWTYeboMK", "qyJLPQMBUuEEkhI", "", "", "", "", "", "", "", "", "", "", "rOsUPq", "", "", "", "sp v", "tjABXGFKaX", "", "", "", "", "", "", "", "", "uCFtpnikffzpIGynu", "", "", "uUOuBVKFxs", "", "", "", "", "", "", "ukVV", "", "", "", "", "uoRyNsvADRrPlF", "", "", "vJEsAKrSc jrBnvb", "", "", "", "", "", "", "", "", "", "", "wKjM", "", "", "", "", "", "", "", "", "wfWltxcuOFs", "", "", "", "", "", "", "", "wrjXviwslafTEBrLBDcQ", "", "", "", "", "", "", "", "", "", "", "xqhYBOAEpUzGUDG", "", "", "", "", "", "", "", "", "", "", "y", "", "yEvRmNbkvfELjCvG", "", "", "", "", "", "", "z NBqViMo", "", "", "", "zhEOGXTiOsTMbzW", "", "", "", "", "", "zuaVLjhQhNdg"]
    , "WEHisFZW wgmmVL"
))