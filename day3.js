const input = ["#1 @ 817,273: 26x26", "#2 @ 974,796: 18x19", "#3 @ 207,456: 14x29", "#4 @ 835,854: 14x11", "#5 @ 223,729: 23x21", "#6 @ 217,76: 25x21", "#7 @ 625,569: 23x25", "#8 @ 434,946: 16x17", "#9 @ 906,507: 10x26", "#10 @ 364,640: 26x10", "#11 @ 915,771: 12x29", "#12 @ 736,919: 20x26", "#13 @ 653,413: 21x25", "#14 @ 946,337: 21x22", "#15 @ 700,156: 28x29", "#16 @ 729,42: 20x27", "#17 @ 41,163: 25x28", "#18 @ 628,464: 15x15", "#19 @ 425,90: 15x17", "#20 @ 308,403: 27x23", "#21 @ 133,929: 23x12", "#22 @ 510,93: 9x5", "#23 @ 703,306: 13x17", "#24 @ 86,922: 15x29", "#25 @ 585,981: 25x18", "#26 @ 476,94: 22x19", "#27 @ 485,2: 14x11", "#28 @ 433,777: 10x14", "#29 @ 878,771: 25x11", "#30 @ 367,909: 11x10", "#31 @ 863,261: 18x12", "#32 @ 640,352: 16x21", "#33 @ 786,382: 29x25", "#34 @ 748,464: 10x19", "#35 @ 278,771: 20x6", "#36 @ 89,443: 19x12", "#37 @ 150,645: 23x19", "#38 @ 902,453: 20x10", "#39 @ 446,938: 11x29", "#40 @ 48,897: 11x20", "#41 @ 701,328: 21x21", "#42 @ 793,232: 27x28", "#43 @ 335,184: 29x15", "#44 @ 156,495: 27x16", "#45 @ 296,339: 11x25", "#46 @ 241,763: 11x19", "#47 @ 711,884: 11x21", "#48 @ 449,88: 11x14", "#49 @ 358,107: 27x27", "#50 @ 234,758: 15x25", "#51 @ 764,852: 13x12", "#52 @ 143,119: 21x15", "#53 @ 469,50: 14x28", "#54 @ 791,500: 12x21", "#55 @ 483,122: 18x26", "#56 @ 915,190: 21x27", "#57 @ 117,177: 21x22", "#58 @ 424,162: 22x25", "#59 @ 60,934: 28x20", "#60 @ 868,24: 21x21", "#61 @ 908,418: 19x26", "#62 @ 182,833: 20x13", "#63 @ 322,285: 24x15", "#64 @ 860,273: 24x20", "#65 @ 362,331: 11x13", "#66 @ 139,211: 15x25", "#67 @ 134,482: 22x18", "#68 @ 480,234: 13x23", "#69 @ 588,353: 10x27", "#70 @ 123,586: 27x27", "#71 @ 293,495: 15x13", "#72 @ 335,97: 26x16", "#73 @ 421,876: 20x21", "#74 @ 417,164: 20x26", "#75 @ 493,314: 18x25", "#76 @ 620,217: 25x20", "#77 @ 133,72: 19x14", "#78 @ 923,916: 20x17", "#79 @ 849,93: 19x29", "#80 @ 251,486: 24x18", "#81 @ 512,682: 18x16", "#82 @ 74,785: 10x10", "#83 @ 323,525: 16x10", "#84 @ 424,958: 22x17", "#85 @ 171,158: 10x28", "#86 @ 210,278: 14x21", "#87 @ 136,875: 22x25", "#88 @ 436,230: 25x14", "#89 @ 604,625: 22x20", "#90 @ 428,897: 17x11", "#91 @ 667,359: 16x26", "#92 @ 553,726: 13x18", "#93 @ 134,335: 18x19", "#94 @ 675,832: 27x28", "#95 @ 705,775: 22x19", "#96 @ 918,415: 24x16", "#97 @ 487,750: 28x18", "#98 @ 95,773: 16x27", "#99 @ 110,495: 21x17", "#100 @ 750,438: 18x27", "#101 @ 471,211: 11x28", "#102 @ 751,327: 14x19", "#103 @ 928,964: 21x17", "#104 @ 959,306: 18x28", "#105 @ 707,257: 28x20", "#106 @ 167,341: 23x14", "#107 @ 431,553: 18x12", "#108 @ 602,933: 7x5", "#109 @ 13,313: 12x21", "#110 @ 806,343: 15x12", "#111 @ 477,818: 28x17", "#112 @ 793,342: 16x17", "#113 @ 141,718: 24x28", "#114 @ 786,957: 22x28", "#115 @ 286,854: 24x19", "#116 @ 635,232: 13x21", "#117 @ 918,776: 18x20", "#118 @ 634,116: 19x26", "#119 @ 305,975: 13x18", "#120 @ 906,381: 16x21", "#121 @ 339,582: 15x15", "#122 @ 760,510: 22x14", "#123 @ 468,308: 16x26", "#124 @ 178,900: 12x13", "#125 @ 650,436: 29x16", "#126 @ 663,443: 29x15", "#127 @ 629,545: 15x26", "#128 @ 539,835: 12x26", "#129 @ 516,442: 11x29", "#130 @ 847,243: 27x24", "#131 @ 83,18: 26x18", "#132 @ 378,79: 29x18", "#133 @ 374,47: 19x28", "#134 @ 97,400: 22x19", "#135 @ 358,353: 12x16", "#136 @ 284,595: 16x25", "#137 @ 599,556: 10x21", "#138 @ 701,925: 24x29", "#139 @ 954,539: 25x18", "#140 @ 509,636: 25x14", "#141 @ 414,21: 26x19", "#142 @ 682,730: 23x26", "#143 @ 113,833: 10x24", "#144 @ 392,71: 23x15", "#145 @ 692,67: 26x24", "#146 @ 182,896: 20x23", "#147 @ 976,800: 5x4", "#148 @ 584,347: 15x26", "#149 @ 79,781: 23x19", "#150 @ 554,264: 24x17", "#151 @ 874,372: 18x14", "#152 @ 299,117: 12x19", "#153 @ 101,470: 16x18", "#154 @ 55,396: 13x10", "#155 @ 220,837: 28x14", "#156 @ 810,813: 15x17", "#157 @ 520,727: 17x27", "#158 @ 165,516: 27x24", "#159 @ 852,500: 11x12", "#160 @ 148,465: 29x16", "#161 @ 416,132: 11x24", "#162 @ 973,491: 26x22", "#163 @ 32,36: 10x17", "#164 @ 80,829: 22x27", "#165 @ 533,439: 18x24", "#166 @ 954,154: 12x24", "#167 @ 18,597: 29x25", "#168 @ 735,718: 10x13", "#169 @ 39,163: 13x11", "#170 @ 418,636: 13x21", "#171 @ 22,220: 17x25", "#172 @ 122,123: 24x12", "#173 @ 745,477: 17x20", "#174 @ 96,812: 23x18", "#175 @ 972,536: 19x27", "#176 @ 895,442: 29x20", "#177 @ 247,1: 26x24", "#178 @ 618,548: 13x12", "#179 @ 936,296: 14x28", "#180 @ 327,440: 10x24", "#181 @ 462,127: 17x28", "#182 @ 539,259: 21x23", "#183 @ 597,915: 22x22", "#184 @ 854,361: 29x23", "#185 @ 483,559: 21x12", "#186 @ 504,301: 23x25", "#187 @ 308,212: 25x15", "#188 @ 136,438: 14x16", "#189 @ 81,444: 21x15", "#190 @ 297,670: 13x23", "#191 @ 918,682: 29x16", "#192 @ 872,36: 10x11", "#193 @ 521,252: 27x12", "#194 @ 131,499: 29x25", "#195 @ 427,255: 25x11", "#196 @ 724,836: 10x14", "#197 @ 489,685: 13x22", "#198 @ 18,942: 20x10", "#199 @ 350,252: 19x22", "#200 @ 903,567: 23x16", "#201 @ 489,11: 14x26", "#202 @ 454,303: 24x14", "#203 @ 412,123: 12x18", "#204 @ 261,440: 15x13", "#205 @ 831,635: 27x27", "#206 @ 122,755: 14x29", "#207 @ 233,731: 19x15", "#208 @ 632,259: 17x19", "#209 @ 749,396: 23x26", "#210 @ 513,491: 19x15", "#211 @ 560,611: 16x6", "#212 @ 605,76: 28x15", "#213 @ 481,719: 26x23", "#214 @ 344,877: 18x17", "#215 @ 969,931: 19x17", "#216 @ 283,687: 23x12", "#217 @ 354,223: 28x27", "#218 @ 415,264: 28x14", "#219 @ 651,795: 10x10", "#220 @ 8,730: 21x10", "#221 @ 661,835: 29x15", "#222 @ 889,455: 16x20", "#223 @ 988,13: 11x10", "#224 @ 243,984: 19x15", "#225 @ 41,195: 25x28", "#226 @ 631,109: 13x25", "#227 @ 242,826: 26x24", "#228 @ 36,801: 14x16", "#229 @ 713,900: 22x25", "#230 @ 295,869: 23x10", "#231 @ 613,330: 25x13", "#232 @ 133,749: 11x28", "#233 @ 710,329: 18x27", "#234 @ 380,239: 10x29", "#235 @ 480,396: 17x27", "#236 @ 629,106: 27x27", "#237 @ 420,87: 27x10", "#238 @ 581,463: 3x16", "#239 @ 486,718: 12x17", "#240 @ 557,266: 9x9", "#241 @ 226,805: 17x15", "#242 @ 615,951: 20x19", "#243 @ 888,17: 17x26", "#244 @ 565,134: 23x20", "#245 @ 410,387: 12x29", "#246 @ 692,857: 14x13", "#247 @ 173,287: 25x10", "#248 @ 258,859: 29x11", "#249 @ 565,565: 26x15", "#250 @ 106,822: 27x23", "#251 @ 970,909: 17x17", "#252 @ 294,490: 25x11", "#253 @ 682,280: 21x20", "#254 @ 292,889: 28x22", "#255 @ 299,398: 4x5", "#256 @ 521,250: 10x20", "#257 @ 559,34: 28x13", "#258 @ 72,3: 24x14", "#259 @ 918,593: 11x27", "#260 @ 84,779: 17x11", "#261 @ 646,372: 26x23", "#262 @ 250,889: 27x14", "#263 @ 296,354: 26x22", "#264 @ 774,788: 11x20", "#265 @ 477,401: 27x26", "#266 @ 838,617: 11x28", "#267 @ 758,322: 12x11", "#268 @ 41,457: 24x11", "#269 @ 509,443: 12x14", "#270 @ 557,281: 16x26", "#271 @ 915,539: 13x18", "#272 @ 545,509: 28x17", "#273 @ 297,315: 23x24", "#274 @ 674,48: 28x17", "#275 @ 553,171: 15x16", "#276 @ 614,919: 25x16", "#277 @ 901,186: 21x22", "#278 @ 337,447: 21x17", "#279 @ 891,597: 24x24", "#280 @ 901,240: 15x17", "#281 @ 575,721: 21x20", "#282 @ 246,426: 25x13", "#283 @ 792,21: 13x24", "#284 @ 618,204: 15x23", "#285 @ 457,543: 24x27", "#286 @ 782,340: 21x27", "#287 @ 700,8: 25x25", "#288 @ 972,562: 13x12", "#289 @ 79,951: 14x15", "#290 @ 216,938: 20x11", "#291 @ 488,393: 27x18", "#292 @ 649,610: 25x24", "#293 @ 895,240: 27x12", "#294 @ 94,150: 21x12", "#295 @ 663,143: 11x24", "#296 @ 234,685: 25x17", "#297 @ 540,533: 17x24", "#298 @ 684,646: 15x16", "#299 @ 317,268: 28x18", "#300 @ 31,889: 18x24", "#301 @ 670,92: 23x28", "#302 @ 701,14: 20x11", "#303 @ 82,325: 14x15", "#304 @ 558,871: 18x27", "#305 @ 791,390: 27x29", "#306 @ 442,958: 16x15", "#307 @ 144,425: 18x28", "#308 @ 511,742: 18x20", "#309 @ 435,289: 23x18", "#310 @ 627,15: 15x23", "#311 @ 468,441: 16x21", "#312 @ 611,466: 28x22", "#313 @ 196,563: 16x11", "#314 @ 217,736: 26x12", "#315 @ 554,69: 19x28", "#316 @ 217,845: 10x25", "#317 @ 636,63: 12x16", "#318 @ 205,922: 19x28", "#319 @ 0,159: 12x20", "#320 @ 922,779: 5x13", "#321 @ 712,835: 22x18", "#322 @ 471,567: 18x11", "#323 @ 329,537: 16x11", "#324 @ 181,840: 19x18", "#325 @ 410,947: 16x25", "#326 @ 850,501: 23x18", "#327 @ 378,659: 13x11", "#328 @ 887,556: 16x25", "#329 @ 2,141: 22x26", "#330 @ 46,799: 24x28", "#331 @ 839,95: 20x21", "#332 @ 281,593: 21x19", "#333 @ 858,44: 13x19", "#334 @ 596,624: 10x29", "#335 @ 862,220: 16x15", "#336 @ 41,832: 21x13", "#337 @ 401,474: 29x19", "#338 @ 610,555: 28x25", "#339 @ 910,347: 24x24", "#340 @ 550,292: 19x17", "#341 @ 134,668: 20x13", "#342 @ 165,18: 14x15", "#343 @ 822,699: 27x15", "#344 @ 524,838: 26x23", "#345 @ 807,727: 22x13", "#346 @ 310,631: 20x23", "#347 @ 313,630: 25x16", "#348 @ 904,421: 17x21", "#349 @ 369,85: 13x10", "#350 @ 463,906: 18x16", "#351 @ 146,42: 17x27", "#352 @ 694,600: 16x18", "#353 @ 150,613: 26x29", "#354 @ 738,722: 26x15", "#355 @ 699,190: 13x27", "#356 @ 449,541: 26x12", "#357 @ 273,768: 29x22", "#358 @ 911,352: 29x13", "#359 @ 554,791: 12x25", "#360 @ 705,656: 15x23", "#361 @ 703,353: 10x20", "#362 @ 64,397: 14x10", "#363 @ 580,353: 29x11", "#364 @ 198,472: 15x11", "#365 @ 349,797: 12x16", "#366 @ 76,857: 18x17", "#367 @ 655,717: 24x14", "#368 @ 560,709: 16x21", "#369 @ 153,511: 22x27", "#370 @ 693,867: 12x21", "#371 @ 893,40: 12x22", "#372 @ 482,676: 21x14", "#373 @ 433,571: 20x20", "#374 @ 746,439: 13x21", "#375 @ 717,255: 24x21", "#376 @ 610,612: 26x26", "#377 @ 122,482: 18x17", "#378 @ 572,623: 13x23", "#379 @ 416,868: 27x29", "#380 @ 206,849: 16x19", "#381 @ 945,192: 20x12", "#382 @ 868,228: 23x22", "#383 @ 2,727: 25x18", "#384 @ 171,654: 26x26", "#385 @ 227,718: 14x14", "#386 @ 126,755: 25x21", "#387 @ 696,638: 20x18", "#388 @ 902,449: 26x12", "#389 @ 317,989: 21x11", "#390 @ 614,575: 19x29", "#391 @ 728,733: 27x18", "#392 @ 859,240: 19x23", "#393 @ 24,489: 27x25", "#394 @ 292,567: 26x18", "#395 @ 102,170: 17x12", "#396 @ 114,336: 11x10", "#397 @ 113,99: 12x11", "#398 @ 469,253: 22x11", "#399 @ 555,858: 26x21", "#400 @ 185,60: 28x29", "#401 @ 488,484: 20x20", "#402 @ 1,344: 25x20", "#403 @ 898,240: 26x18", "#404 @ 657,97: 24x21", "#405 @ 121,68: 21x24", "#406 @ 520,13: 19x10", "#407 @ 444,59: 18x17", "#408 @ 944,690: 28x22", "#409 @ 341,874: 23x27", "#410 @ 38,945: 13x24", "#411 @ 35,813: 23x21", "#412 @ 877,265: 14x10", "#413 @ 89,172: 11x18", "#414 @ 635,663: 23x28", "#415 @ 668,365: 28x19", "#416 @ 352,198: 20x17", "#417 @ 617,221: 10x22", "#418 @ 558,600: 23x24", "#419 @ 699,780: 20x25", "#420 @ 766,225: 28x29", "#421 @ 94,185: 21x10", "#422 @ 440,773: 5x12", "#423 @ 529,642: 15x17", "#424 @ 736,703: 23x19", "#425 @ 232,519: 10x25", "#426 @ 912,756: 18x16", "#427 @ 378,66: 13x28", "#428 @ 234,801: 25x26", "#429 @ 417,48: 12x14", "#430 @ 410,881: 21x23", "#431 @ 969,901: 13x17", "#432 @ 514,717: 13x27", "#433 @ 467,622: 17x21", "#434 @ 814,428: 21x18", "#435 @ 899,575: 29x12", "#436 @ 127,582: 17x17", "#437 @ 323,624: 19x17", "#438 @ 165,200: 23x19", "#439 @ 457,203: 21x21", "#440 @ 419,479: 10x25", "#441 @ 762,475: 22x10", "#442 @ 101,486: 22x14", "#443 @ 959,655: 19x23", "#444 @ 958,299: 22x21", "#445 @ 487,353: 27x19", "#446 @ 600,455: 14x25", "#447 @ 495,154: 13x17", "#448 @ 944,573: 24x27", "#449 @ 244,602: 14x22", "#450 @ 36,227: 10x21", "#451 @ 241,849: 18x29", "#452 @ 841,470: 11x19", "#453 @ 51,901: 13x13", "#454 @ 21,941: 17x18", "#455 @ 769,298: 18x18", "#456 @ 675,626: 23x26", "#457 @ 495,564: 16x16", "#458 @ 171,18: 15x28", "#459 @ 776,360: 10x28", "#460 @ 54,952: 10x29", "#461 @ 364,940: 13x23", "#462 @ 103,159: 25x25", "#463 @ 330,617: 15x15", "#464 @ 247,801: 22x16", "#465 @ 654,847: 20x18", "#466 @ 419,407: 23x24", "#467 @ 400,863: 13x27", "#468 @ 370,88: 14x22", "#469 @ 639,751: 18x18", "#470 @ 85,402: 17x15", "#471 @ 214,60: 10x26", "#472 @ 185,343: 24x14", "#473 @ 500,746: 16x14", "#474 @ 101,327: 24x23", "#475 @ 497,103: 22x11", "#476 @ 101,213: 26x11", "#477 @ 80,813: 21x22", "#478 @ 362,630: 12x29", "#479 @ 407,934: 11x25", "#480 @ 628,550: 12x15", "#481 @ 316,594: 10x20", "#482 @ 51,177: 12x27", "#483 @ 378,865: 14x22", "#484 @ 17,203: 27x17", "#485 @ 612,145: 23x21", "#486 @ 115,77: 13x16", "#487 @ 465,120: 12x12", "#488 @ 818,115: 29x16", "#489 @ 619,67: 21x10", "#490 @ 923,405: 12x29", "#491 @ 79,846: 13x10", "#492 @ 191,78: 17x25", "#493 @ 336,293: 19x25", "#494 @ 310,938: 12x15", "#495 @ 956,552: 22x25", "#496 @ 664,845: 22x17", "#497 @ 779,681: 11x20", "#498 @ 580,924: 25x28", "#499 @ 13,380: 17x22", "#500 @ 888,579: 23x12", "#501 @ 35,551: 18x20", "#502 @ 256,430: 10x20", "#503 @ 818,30: 14x29", "#504 @ 101,592: 29x12", "#505 @ 234,791: 26x20", "#506 @ 220,688: 13x25", "#507 @ 761,808: 20x19", "#508 @ 661,561: 21x23", "#509 @ 813,803: 16x16", "#510 @ 354,300: 11x16", "#511 @ 829,663: 13x14", "#512 @ 949,659: 16x10", "#513 @ 112,840: 28x13", "#514 @ 259,418: 16x29", "#515 @ 451,564: 17x24", "#516 @ 905,96: 18x25", "#517 @ 697,300: 14x23", "#518 @ 231,870: 28x23", "#519 @ 959,619: 28x21", "#520 @ 177,535: 17x25", "#521 @ 215,889: 17x12", "#522 @ 809,192: 15x24", "#523 @ 487,269: 28x19", "#524 @ 890,227: 19x12", "#525 @ 50,484: 19x13", "#526 @ 866,216: 23x24", "#527 @ 522,563: 13x20", "#528 @ 570,506: 23x15", "#529 @ 247,101: 25x17", "#530 @ 691,249: 28x15", "#531 @ 297,396: 10x12", "#532 @ 315,647: 14x16", "#533 @ 681,499: 28x16", "#534 @ 898,560: 22x22", "#535 @ 465,658: 27x27", "#536 @ 623,775: 15x24", "#537 @ 908,542: 16x13", "#538 @ 189,676: 11x11", "#539 @ 540,36: 21x10", "#540 @ 775,18: 28x12", "#541 @ 339,337: 29x10", "#542 @ 620,132: 26x25", "#543 @ 214,55: 22x29", "#544 @ 957,222: 10x17", "#545 @ 892,907: 29x13", "#546 @ 144,533: 12x23", "#547 @ 508,731: 22x10", "#548 @ 753,43: 19x14", "#549 @ 341,698: 27x14", "#550 @ 913,932: 27x23", "#551 @ 283,580: 25x28", "#552 @ 651,223: 19x10", "#553 @ 19,334: 11x17", "#554 @ 238,927: 15x25", "#555 @ 807,858: 25x13", "#556 @ 831,261: 19x29", "#557 @ 933,206: 25x29", "#558 @ 717,291: 16x13", "#559 @ 647,557: 27x17", "#560 @ 799,328: 26x25", "#561 @ 171,830: 24x12", "#562 @ 453,368: 10x27", "#563 @ 308,322: 28x28", "#564 @ 482,111: 11x20", "#565 @ 493,465: 18x25", "#566 @ 579,964: 23x17", "#567 @ 344,433: 24x22", "#568 @ 441,377: 24x16", "#569 @ 50,372: 13x15", "#570 @ 818,90: 26x13", "#571 @ 819,887: 26x15", "#572 @ 715,967: 29x19", "#573 @ 844,895: 18x10", "#574 @ 229,671: 25x21", "#575 @ 75,512: 20x20", "#576 @ 60,361: 25x25", "#577 @ 772,304: 27x14", "#578 @ 627,538: 14x11", "#579 @ 149,66: 27x28", "#580 @ 164,786: 14x27", "#581 @ 867,712: 16x17", "#582 @ 578,791: 21x11", "#583 @ 677,635: 28x24", "#584 @ 618,580: 21x19", "#585 @ 857,191: 24x26", "#586 @ 36,882: 20x21", "#587 @ 486,560: 18x29", "#588 @ 851,425: 16x28", "#589 @ 558,855: 23x23", "#590 @ 890,583: 14x28", "#591 @ 149,198: 23x10", "#592 @ 748,715: 26x26", "#593 @ 974,241: 21x22", "#594 @ 912,196: 25x21", "#595 @ 623,766: 21x28", "#596 @ 12,358: 10x28", "#597 @ 876,616: 20x26", "#598 @ 7,28: 12x24", "#599 @ 525,859: 27x13", "#600 @ 931,188: 12x28", "#601 @ 763,385: 20x29", "#602 @ 300,653: 18x18", "#603 @ 510,670: 23x15", "#604 @ 520,496: 11x21", "#605 @ 204,890: 16x11", "#606 @ 524,431: 24x18", "#607 @ 811,98: 21x20", "#608 @ 786,859: 24x13", "#609 @ 305,20: 11x12", "#610 @ 741,954: 13x18", "#611 @ 313,260: 17x13", "#612 @ 315,602: 27x20", "#613 @ 194,939: 29x27", "#614 @ 871,418: 12x18", "#615 @ 164,317: 13x15", "#616 @ 124,748: 22x20", "#617 @ 83,173: 14x20", "#618 @ 345,836: 20x11", "#619 @ 799,547: 12x10", "#620 @ 85,176: 18x12", "#621 @ 894,171: 27x22", "#622 @ 397,673: 25x11", "#623 @ 891,846: 12x28", "#624 @ 191,120: 20x23", "#625 @ 955,305: 24x25", "#626 @ 702,616: 10x17", "#627 @ 902,671: 16x24", "#628 @ 282,887: 10x20", "#629 @ 796,765: 15x12", "#630 @ 50,828: 26x24", "#631 @ 523,914: 25x22", "#632 @ 791,608: 21x11", "#633 @ 266,902: 25x11", "#634 @ 179,496: 10x13", "#635 @ 99,786: 15x18", "#636 @ 363,954: 23x15", "#637 @ 879,468: 19x20", "#638 @ 441,910: 18x28", "#639 @ 406,436: 23x23", "#640 @ 102,486: 20x23", "#641 @ 603,956: 29x16", "#642 @ 477,276: 26x26", "#643 @ 681,785: 24x14", "#644 @ 660,80: 16x29", "#645 @ 550,196: 29x29", "#646 @ 824,268: 23x18", "#647 @ 483,139: 19x21", "#648 @ 575,454: 27x29", "#649 @ 915,601: 24x10", "#650 @ 654,198: 26x16", "#651 @ 490,556: 25x22", "#652 @ 409,93: 23x23", "#653 @ 683,603: 22x11", "#654 @ 869,357: 12x19", "#655 @ 424,469: 19x23", "#656 @ 285,869: 12x21", "#657 @ 751,330: 27x16", "#658 @ 62,279: 15x28", "#659 @ 899,659: 10x22", "#660 @ 423,777: 29x13", "#661 @ 341,330: 14x23", "#662 @ 863,448: 16x20", "#663 @ 469,155: 26x27", "#664 @ 376,183: 20x19", "#665 @ 819,818: 10x13", "#666 @ 207,719: 26x24", "#667 @ 76,774: 10x15", "#668 @ 224,738: 16x15", "#669 @ 138,521: 11x22", "#670 @ 111,716: 19x28", "#671 @ 229,727: 25x11", "#672 @ 616,792: 20x28", "#673 @ 316,429: 13x17", "#674 @ 887,494: 24x21", "#675 @ 926,354: 28x11", "#676 @ 502,449: 29x21", "#677 @ 420,943: 24x28", "#678 @ 842,573: 14x25", "#679 @ 516,36: 10x21", "#680 @ 307,626: 20x18", "#681 @ 103,963: 24x29", "#682 @ 498,447: 27x10", "#683 @ 42,414: 10x24", "#684 @ 145,353: 24x24", "#685 @ 631,183: 23x22", "#686 @ 634,9: 18x27", "#687 @ 108,269: 19x11", "#688 @ 656,785: 17x19", "#689 @ 280,922: 21x14", "#690 @ 34,541: 18x29", "#691 @ 38,118: 25x28", "#692 @ 679,269: 12x23", "#693 @ 517,356: 5x7", "#694 @ 595,143: 22x23", "#695 @ 239,781: 29x15", "#696 @ 353,868: 11x12", "#697 @ 824,452: 24x19", "#698 @ 641,407: 19x23", "#699 @ 49,354: 26x20", "#700 @ 933,919: 28x16", "#701 @ 98,856: 22x14", "#702 @ 602,254: 29x12", "#703 @ 594,930: 23x21", "#704 @ 569,641: 24x19", "#705 @ 36,468: 28x29", "#706 @ 172,834: 17x22", "#707 @ 959,637: 11x22", "#708 @ 878,209: 29x29", "#709 @ 85,409: 25x11", "#710 @ 386,964: 19x15", "#711 @ 767,201: 17x13", "#712 @ 326,851: 18x27", "#713 @ 485,715: 14x17", "#714 @ 179,15: 21x13", "#715 @ 979,911: 10x20", "#716 @ 419,904: 20x24", "#717 @ 663,490: 28x24", "#718 @ 965,421: 12x14", "#719 @ 888,949: 23x29", "#720 @ 74,844: 14x11", "#721 @ 608,905: 21x18", "#722 @ 66,46: 28x12", "#723 @ 628,720: 22x25", "#724 @ 307,470: 15x23", "#725 @ 179,642: 25x26", "#726 @ 696,441: 24x19", "#727 @ 852,48: 13x14", "#728 @ 730,809: 24x17", "#729 @ 775,899: 7x8", "#730 @ 628,58: 12x12", "#731 @ 820,860: 29x23", "#732 @ 116,863: 21x18", "#733 @ 59,658: 27x12", "#734 @ 949,476: 27x23", "#735 @ 92,81: 19x24", "#736 @ 524,728: 10x18", "#737 @ 102,827: 23x25", "#738 @ 105,127: 24x17", "#739 @ 617,745: 25x26", "#740 @ 897,802: 27x22", "#741 @ 692,144: 22x16", "#742 @ 579,198: 29x12", "#743 @ 863,692: 19x25", "#744 @ 819,816: 15x10", "#745 @ 872,872: 13x22", "#746 @ 880,818: 22x10", "#747 @ 623,38: 19x29", "#748 @ 453,69: 26x20", "#749 @ 223,277: 11x26", "#750 @ 378,99: 20x25", "#751 @ 439,790: 25x21", "#752 @ 357,895: 17x22", "#753 @ 672,154: 17x20", "#754 @ 710,149: 29x10", "#755 @ 903,447: 16x11", "#756 @ 595,329: 27x19", "#757 @ 252,951: 10x17", "#758 @ 923,180: 24x23", "#759 @ 967,288: 16x29", "#760 @ 418,469: 19x14", "#761 @ 470,149: 12x19", "#762 @ 89,498: 29x19", "#763 @ 387,404: 21x26", "#764 @ 263,923: 11x26", "#765 @ 840,253: 23x18", "#766 @ 622,761: 10x11", "#767 @ 930,761: 21x24", "#768 @ 286,557: 14x25", "#769 @ 74,3: 19x12", "#770 @ 754,10: 13x10", "#771 @ 842,412: 27x27", "#772 @ 416,678: 26x29", "#773 @ 75,843: 27x28", "#774 @ 107,773: 12x21", "#775 @ 622,789: 14x24", "#776 @ 551,170: 19x27", "#777 @ 44,885: 12x11", "#778 @ 774,943: 29x18", "#779 @ 827,44: 26x20", "#780 @ 464,417: 26x17", "#781 @ 674,266: 21x14", "#782 @ 452,774: 15x14", "#783 @ 148,360: 15x20", "#784 @ 680,250: 19x18", "#785 @ 702,729: 25x24", "#786 @ 20,44: 24x27", "#787 @ 498,494: 27x20", "#788 @ 242,913: 29x17", "#789 @ 252,912: 28x10", "#790 @ 670,728: 17x28", "#791 @ 754,518: 24x21", "#792 @ 665,379: 13x15", "#793 @ 65,535: 22x17", "#794 @ 127,304: 26x15", "#795 @ 355,182: 24x13", "#796 @ 501,337: 15x16", "#797 @ 323,223: 12x23", "#798 @ 195,667: 15x18", "#799 @ 829,850: 22x22", "#800 @ 165,889: 28x12", "#801 @ 57,460: 15x22", "#802 @ 65,668: 28x28", "#803 @ 322,676: 16x26", "#804 @ 462,562: 19x14", "#805 @ 420,759: 14x22", "#806 @ 202,550: 20x22", "#807 @ 379,43: 22x29", "#808 @ 519,817: 10x25", "#809 @ 4,714: 16x18", "#810 @ 176,674: 24x15", "#811 @ 745,55: 27x21", "#812 @ 690,197: 20x10", "#813 @ 21,957: 14x24", "#814 @ 698,302: 25x20", "#815 @ 668,826: 11x18", "#816 @ 953,176: 11x12", "#817 @ 226,663: 17x13", "#818 @ 321,461: 10x11", "#819 @ 794,101: 14x27", "#820 @ 230,892: 23x29", "#821 @ 790,586: 10x26", "#822 @ 590,952: 14x20", "#823 @ 628,538: 26x23", "#824 @ 515,492: 13x17", "#825 @ 62,950: 25x16", "#826 @ 754,53: 22x17", "#827 @ 361,332: 19x12", "#828 @ 889,512: 20x28", "#829 @ 954,589: 29x29", "#830 @ 369,358: 16x25", "#831 @ 353,793: 14x19", "#832 @ 623,69: 28x10", "#833 @ 656,49: 22x23", "#834 @ 101,822: 10x28", "#835 @ 183,202: 18x23", "#836 @ 346,329: 16x15", "#837 @ 188,793: 26x21", "#838 @ 568,126: 16x12", "#839 @ 899,361: 12x29", "#840 @ 667,853: 29x14", "#841 @ 438,558: 25x25", "#842 @ 185,120: 12x15", "#843 @ 153,62: 15x10", "#844 @ 46,586: 21x17", "#845 @ 263,874: 26x29", "#846 @ 728,5: 26x20", "#847 @ 367,760: 12x27", "#848 @ 449,411: 17x20", "#849 @ 403,474: 25x13", "#850 @ 72,534: 23x15", "#851 @ 930,500: 23x24", "#852 @ 103,260: 23x19", "#853 @ 304,651: 24x21", "#854 @ 94,975: 14x16", "#855 @ 566,787: 29x26", "#856 @ 656,152: 16x16", "#857 @ 910,390: 4x8", "#858 @ 858,742: 26x25", "#859 @ 473,830: 16x26", "#860 @ 261,316: 22x14", "#861 @ 907,700: 20x10", "#862 @ 700,101: 18x13", "#863 @ 0,304: 21x26", "#864 @ 748,777: 27x28", "#865 @ 433,745: 23x26", "#866 @ 646,555: 25x24", "#867 @ 147,674: 25x10", "#868 @ 341,308: 24x26", "#869 @ 77,323: 26x16", "#870 @ 309,949: 27x28", "#871 @ 668,554: 24x19", "#872 @ 595,260: 12x10", "#873 @ 815,559: 28x26", "#874 @ 721,1: 12x26", "#875 @ 975,353: 16x16", "#876 @ 265,276: 16x29", "#877 @ 900,823: 17x24", "#878 @ 414,646: 15x18", "#879 @ 797,149: 27x17", "#880 @ 31,149: 11x25", "#881 @ 162,696: 11x24", "#882 @ 915,255: 18x17", "#883 @ 696,504: 15x12", "#884 @ 141,580: 28x18", "#885 @ 919,664: 19x15", "#886 @ 689,740: 12x29", "#887 @ 566,72: 21x14", "#888 @ 617,23: 24x16", "#889 @ 290,933: 28x27", "#890 @ 500,705: 27x17", "#891 @ 788,308: 24x21", "#892 @ 973,5: 21x18", "#893 @ 618,187: 25x26", "#894 @ 962,398: 17x25", "#895 @ 870,768: 15x10", "#896 @ 305,302: 23x26", "#897 @ 267,313: 15x11", "#898 @ 255,832: 28x13", "#899 @ 288,542: 13x29", "#900 @ 935,913: 18x23", "#901 @ 334,27: 24x17", "#902 @ 920,265: 28x19", "#903 @ 456,442: 14x28", "#904 @ 0,340: 28x23", "#905 @ 597,629: 17x11", "#906 @ 51,157: 16x21", "#907 @ 919,682: 27x19", "#908 @ 284,532: 14x10", "#909 @ 536,861: 23x14", "#910 @ 906,408: 20x20", "#911 @ 27,114: 25x19", "#912 @ 501,744: 16x23", "#913 @ 926,632: 24x20", "#914 @ 344,256: 22x15", "#915 @ 877,887: 19x13", "#916 @ 46,695: 12x22", "#917 @ 501,308: 18x10", "#918 @ 527,736: 20x10", "#919 @ 328,336: 29x29", "#920 @ 446,243: 15x25", "#921 @ 379,474: 28x10", "#922 @ 149,687: 20x17", "#923 @ 138,865: 28x27", "#924 @ 538,258: 18x19", "#925 @ 441,211: 22x14", "#926 @ 18,358: 17x21", "#927 @ 22,369: 12x21", "#928 @ 667,507: 10x17", "#929 @ 176,833: 23x20", "#930 @ 972,611: 15x23", "#931 @ 54,173: 12x15", "#932 @ 327,30: 15x10", "#933 @ 395,436: 24x12", "#934 @ 513,923: 19x24", "#935 @ 470,495: 29x26", "#936 @ 464,62: 12x17", "#937 @ 537,638: 25x27", "#938 @ 515,4: 22x13", "#939 @ 644,600: 28x23", "#940 @ 350,603: 21x10", "#941 @ 298,361: 12x21", "#942 @ 826,648: 25x26", "#943 @ 918,432: 29x25", "#944 @ 349,612: 18x13", "#945 @ 751,522: 16x14", "#946 @ 506,39: 25x21", "#947 @ 330,566: 21x29", "#948 @ 617,4: 14x23", "#949 @ 831,676: 26x25", "#950 @ 526,286: 12x19", "#951 @ 495,419: 14x16", "#952 @ 116,323: 13x26", "#953 @ 535,857: 14x28", "#954 @ 171,641: 14x21", "#955 @ 182,527: 10x11", "#956 @ 890,52: 22x14", "#957 @ 643,735: 17x18", "#958 @ 508,307: 12x23", "#959 @ 217,842: 17x11", "#960 @ 170,843: 12x26", "#961 @ 128,309: 21x26", "#962 @ 722,8: 11x10", "#963 @ 95,191: 24x28", "#964 @ 129,584: 6x12", "#965 @ 125,778: 23x29", "#966 @ 346,101: 28x11", "#967 @ 433,766: 25x24", "#968 @ 280,209: 27x20", "#969 @ 969,376: 23x24", "#970 @ 844,591: 14x28", "#971 @ 801,549: 7x5", "#972 @ 416,73: 21x26", "#973 @ 410,675: 18x17", "#974 @ 968,914: 14x24", "#975 @ 792,165: 17x12", "#976 @ 144,783: 12x15", "#977 @ 814,198: 18x12", "#978 @ 369,756: 15x24", "#979 @ 844,635: 15x26", "#980 @ 927,657: 4x5", "#981 @ 981,130: 11x16", "#982 @ 848,286: 15x20", "#983 @ 468,699: 21x21", "#984 @ 876,491: 24x10", "#985 @ 946,426: 25x27", "#986 @ 376,580: 16x19", "#987 @ 347,793: 18x29", "#988 @ 665,299: 29x14", "#989 @ 635,127: 15x14", "#990 @ 511,915: 25x19", "#991 @ 710,730: 27x25", "#992 @ 143,3: 22x16", "#993 @ 488,362: 25x23", "#994 @ 962,353: 14x25", "#995 @ 430,897: 24x20", "#996 @ 694,783: 13x10", "#997 @ 828,273: 14x22", "#998 @ 500,269: 21x22", "#999 @ 839,907: 21x23", "#1000 @ 767,14: 18x20", "#1001 @ 902,865: 16x27", "#1002 @ 143,967: 25x11", "#1003 @ 117,787: 26x28", "#1004 @ 874,27: 21x24", "#1005 @ 197,293: 26x13", "#1006 @ 359,581: 23x10", "#1007 @ 210,345: 19x28", "#1008 @ 771,817: 18x27", "#1009 @ 553,198: 28x26", "#1010 @ 928,750: 27x18", "#1011 @ 702,19: 15x17", "#1012 @ 620,940: 21x23", "#1013 @ 505,76: 18x26", "#1014 @ 563,948: 21x23", "#1015 @ 109,722: 28x19", "#1016 @ 173,317: 15x10", "#1017 @ 377,342: 12x13", "#1018 @ 486,668: 15x15", "#1019 @ 31,933: 17x26", "#1020 @ 296,491: 19x15", "#1021 @ 532,257: 19x24", "#1022 @ 800,330: 24x25", "#1023 @ 303,297: 12x25", "#1024 @ 349,775: 29x29", "#1025 @ 610,101: 20x15", "#1026 @ 13,218: 17x14", "#1027 @ 306,599: 26x16", "#1028 @ 974,299: 24x22", "#1029 @ 878,961: 16x24", "#1030 @ 146,708: 17x13", "#1031 @ 519,119: 27x14", "#1032 @ 769,888: 22x27", "#1033 @ 281,526: 23x29", "#1034 @ 221,760: 27x11", "#1035 @ 594,87: 17x26", "#1036 @ 979,125: 11x11", "#1037 @ 358,72: 22x27", "#1038 @ 291,10: 16x13", "#1039 @ 792,887: 20x18", "#1040 @ 681,599: 19x11", "#1041 @ 464,600: 12x25", "#1042 @ 928,503: 11x21", "#1043 @ 257,483: 13x12", "#1044 @ 489,294: 17x11", "#1045 @ 84,31: 21x12", "#1046 @ 700,31: 27x22", "#1047 @ 969,383: 20x16", "#1048 @ 685,160: 18x13", "#1049 @ 636,52: 28x17", "#1050 @ 566,347: 25x16", "#1051 @ 543,112: 19x19", "#1052 @ 108,797: 19x24", "#1053 @ 655,212: 16x16", "#1054 @ 4,291: 19x23", "#1055 @ 231,932: 26x15", "#1056 @ 406,793: 19x26", "#1057 @ 431,896: 18x12", "#1058 @ 341,694: 27x23", "#1059 @ 500,809: 22x11", "#1060 @ 949,393: 22x15", "#1061 @ 621,382: 24x18", "#1062 @ 322,664: 14x13", "#1063 @ 175,443: 29x22", "#1064 @ 484,147: 15x18", "#1065 @ 741,521: 12x29", "#1066 @ 837,919: 24x13", "#1067 @ 381,639: 27x22", "#1068 @ 921,648: 20x19", "#1069 @ 232,694: 14x27", "#1070 @ 836,296: 21x12", "#1071 @ 555,808: 28x25", "#1072 @ 57,903: 28x16", "#1073 @ 90,384: 15x23", "#1074 @ 109,159: 18x28", "#1075 @ 771,281: 18x23", "#1076 @ 245,90: 26x17", "#1077 @ 908,672: 14x14", "#1078 @ 940,162: 15x18", "#1079 @ 694,468: 14x24", "#1080 @ 599,987: 29x13", "#1081 @ 652,107: 25x22", "#1082 @ 668,576: 10x14", "#1083 @ 213,67: 12x18", "#1084 @ 295,445: 27x11", "#1085 @ 399,829: 18x14", "#1086 @ 891,27: 11x11", "#1087 @ 298,109: 16x26", "#1088 @ 867,426: 15x25", "#1089 @ 61,826: 10x15", "#1090 @ 714,651: 20x15", "#1091 @ 397,831: 17x15", "#1092 @ 169,159: 28x21", "#1093 @ 18,719: 16x12", "#1094 @ 338,514: 18x20", "#1095 @ 956,628: 19x10", "#1096 @ 260,485: 3x6", "#1097 @ 848,844: 16x11", "#1098 @ 234,618: 18x15", "#1099 @ 365,649: 21x26", "#1100 @ 289,340: 13x13", "#1101 @ 539,455: 18x27", "#1102 @ 364,333: 21x23", "#1103 @ 815,428: 28x27", "#1104 @ 443,912: 23x23", "#1105 @ 421,863: 10x27", "#1106 @ 964,313: 20x17", "#1107 @ 872,677: 19x28", "#1108 @ 541,239: 13x17", "#1109 @ 316,757: 22x15", "#1110 @ 304,851: 11x16", "#1111 @ 115,565: 22x29", "#1112 @ 929,172: 25x29", "#1113 @ 327,413: 14x22", "#1114 @ 916,420: 20x14", "#1115 @ 461,821: 25x21", "#1116 @ 222,369: 29x11", "#1117 @ 755,12: 16x16", "#1118 @ 601,558: 5x14", "#1119 @ 523,252: 3x12", "#1120 @ 492,937: 14x27", "#1121 @ 746,324: 29x21", "#1122 @ 860,298: 11x23", "#1123 @ 42,793: 23x23", "#1124 @ 715,945: 18x28", "#1125 @ 224,801: 29x21", "#1126 @ 890,442: 28x28", "#1127 @ 427,782: 21x14", "#1128 @ 442,551: 10x28", "#1129 @ 863,798: 17x18", "#1130 @ 650,133: 12x24", "#1131 @ 224,795: 24x26", "#1132 @ 661,376: 27x29", "#1133 @ 897,867: 14x16", "#1134 @ 12,958: 28x25", "#1135 @ 605,624: 29x21", "#1136 @ 493,322: 23x23", "#1137 @ 130,947: 21x24", "#1138 @ 765,696: 17x10", "#1139 @ 855,206: 18x28", "#1140 @ 887,816: 20x22", "#1141 @ 380,873: 6x10", "#1142 @ 231,539: 14x16", "#1143 @ 409,468: 10x28", "#1144 @ 473,555: 11x12", "#1145 @ 619,386: 27x21", "#1146 @ 56,968: 4x8", "#1147 @ 207,656: 17x11", "#1148 @ 58,495: 27x13", "#1149 @ 378,465: 29x18", "#1150 @ 233,963: 17x26", "#1151 @ 931,274: 20x27", "#1152 @ 391,428: 13x27", "#1153 @ 873,246: 14x20", "#1154 @ 448,289: 21x11", "#1155 @ 690,320: 20x14", "#1156 @ 419,551: 15x17", "#1157 @ 184,208: 25x27", "#1158 @ 778,511: 14x24", "#1159 @ 291,227: 11x12", "#1160 @ 722,247: 23x24", "#1161 @ 686,451: 18x18", "#1162 @ 612,811: 16x14", "#1163 @ 888,376: 16x15", "#1164 @ 85,162: 12x21", "#1165 @ 542,729: 18x22", "#1166 @ 116,864: 14x21", "#1167 @ 647,88: 24x20", "#1168 @ 586,617: 15x25", "#1169 @ 181,178: 21x26", "#1170 @ 954,229: 24x14", "#1171 @ 166,798: 9x8", "#1172 @ 636,200: 21x11", "#1173 @ 142,104: 22x22", "#1174 @ 973,925: 12x17", "#1175 @ 782,8: 10x18", "#1176 @ 11,324: 28x20", "#1177 @ 448,67: 11x24", "#1178 @ 59,278: 12x24", "#1179 @ 466,764: 13x17", "#1180 @ 890,783: 29x10", "#1181 @ 476,831: 10x23", "#1182 @ 875,346: 14x26", "#1183 @ 698,774: 11x27", "#1184 @ 793,334: 26x21", "#1185 @ 126,929: 22x26", "#1186 @ 715,63: 21x11", "#1187 @ 169,347: 21x21", "#1188 @ 522,564: 19x18", "#1189 @ 945,573: 15x11", "#1190 @ 889,756: 28x16", "#1191 @ 451,197: 26x22", "#1192 @ 449,633: 22x26", "#1193 @ 102,763: 19x11", "#1194 @ 214,846: 14x18", "#1195 @ 583,558: 15x18", "#1196 @ 446,587: 25x10", "#1197 @ 109,852: 22x29", "#1198 @ 149,326: 20x27", "#1199 @ 637,42: 23x28", "#1200 @ 878,151: 28x28", "#1201 @ 479,562: 28x27", "#1202 @ 367,866: 24x17", "#1203 @ 182,17: 11x7", "#1204 @ 217,734: 10x12", "#1205 @ 421,60: 21x16", "#1206 @ 742,900: 10x20", "#1207 @ 865,690: 21x27", "#1208 @ 22,231: 19x28", "#1209 @ 284,896: 4x6", "#1210 @ 498,336: 10x25", "#1211 @ 474,76: 26x27", "#1212 @ 313,287: 23x29", "#1213 @ 816,338: 10x28", "#1214 @ 727,818: 27x18", "#1215 @ 967,577: 21x20", "#1216 @ 99,722: 13x12", "#1217 @ 213,861: 18x18", "#1218 @ 654,49: 17x27", "#1219 @ 817,735: 19x13", "#1220 @ 825,72: 15x29", "#1221 @ 343,251: 10x13", "#1222 @ 771,860: 26x20", "#1223 @ 202,797: 11x12", "#1224 @ 145,782: 24x24", "#1225 @ 15,611: 21x19", "#1226 @ 629,427: 15x16", "#1227 @ 748,183: 20x28", "#1228 @ 94,86: 12x14", "#1229 @ 62,51: 21x13", "#1230 @ 218,649: 18x13", "#1231 @ 798,158: 14x16", "#1232 @ 178,541: 18x19", "#1233 @ 856,414: 17x23", "#1234 @ 962,252: 20x13", "#1235 @ 543,300: 25x18", "#1236 @ 263,293: 14x25", "#1237 @ 933,253: 14x19", "#1238 @ 345,816: 22x21", "#1239 @ 891,212: 11x25", "#1240 @ 157,148: 19x22", "#1241 @ 47,806: 19x10", "#1242 @ 148,3: 12x14", "#1243 @ 687,8: 22x29", "#1244 @ 969,252: 21x29", "#1245 @ 115,101: 6x6", "#1246 @ 378,724: 26x13", "#1247 @ 711,263: 27x22", "#1248 @ 790,156: 12x13", "#1249 @ 483,407: 28x13", "#1250 @ 621,193: 18x23", "#1251 @ 774,340: 20x15", "#1252 @ 935,769: 18x14", "#1253 @ 160,461: 18x14", "#1254 @ 383,865: 22x14", "#1255 @ 320,536: 17x25", "#1256 @ 795,868: 17x27", "#1257 @ 219,662: 14x11", "#1258 @ 701,109: 20x20", "#1259 @ 494,960: 26x18", "#1260 @ 307,184: 24x16", "#1261 @ 733,403: 29x13", "#1262 @ 117,113: 20x20", "#1263 @ 289,570: 12x12", "#1264 @ 641,277: 25x22", "#1265 @ 663,58: 23x14", "#1266 @ 848,229: 17x13", "#1267 @ 515,347: 15x29", "#1268 @ 950,194: 9x7", "#1269 @ 463,812: 23x29", "#1270 @ 367,708: 26x20", "#1271 @ 272,863: 25x11", "#1272 @ 444,951: 11x11", "#1273 @ 207,747: 28x19", "#1274 @ 242,9: 11x19", "#1275 @ 555,840: 15x25", "#1276 @ 853,121: 22x28", "#1277 @ 135,117: 20x19", "#1278 @ 804,759: 14x15", "#1279 @ 232,737: 28x29", "#1280 @ 663,81: 26x28", "#1281 @ 817,251: 26x11", "#1282 @ 629,717: 21x10", "#1283 @ 428,292: 22x23", "#1284 @ 649,202: 25x12", "#1285 @ 122,373: 18x21", "#1286 @ 130,717: 23x20", "#1287 @ 857,720: 16x24", "#1288 @ 420,52: 5x6", "#1289 @ 775,786: 20x17", "#1290 @ 13,827: 29x21", "#1291 @ 656,727: 14x18", "#1292 @ 913,961: 21x12", "#1293 @ 876,805: 19x18", "#1294 @ 892,835: 20x25", "#1295 @ 405,856: 24x22", "#1296 @ 703,660: 23x12", "#1297 @ 119,361: 14x13", "#1298 @ 936,634: 8x8", "#1299 @ 569,679: 18x26", "#1300 @ 626,424: 14x19", "#1301 @ 377,331: 22x25", "#1302 @ 424,934: 25x23", "#1303 @ 261,494: 22x26", "#1304 @ 455,397: 15x18", "#1305 @ 221,946: 25x10", "#1306 @ 395,25: 21x19", "#1307 @ 670,139: 16x20", "#1308 @ 218,932: 12x10", "#1309 @ 598,451: 14x17", "#1310 @ 820,332: 14x28", "#1311 @ 25,349: 22x16", "#1312 @ 672,454: 29x14", "#1313 @ 468,144: 25x23", "#1314 @ 650,654: 13x12", "#1315 @ 968,252: 12x26", "#1316 @ 411,54: 24x27", "#1317 @ 513,640: 6x5", "#1318 @ 727,380: 19x25", "#1319 @ 868,259: 12x19", "#1320 @ 470,585: 10x12", "#1321 @ 346,259: 15x19", "#1322 @ 125,332: 12x11", "#1323 @ 415,664: 16x24", "#1324 @ 606,112: 18x22", "#1325 @ 610,948: 23x10", "#1326 @ 43,684: 14x12", "#1327 @ 150,354: 22x27", "#1328 @ 881,33: 13x20", "#1329 @ 168,440: 16x15", "#1330 @ 33,418: 15x28", "#1331 @ 391,632: 22x23", "#1332 @ 524,946: 25x20", "#1333 @ 473,716: 16x19", "#1334 @ 855,128: 17x26", "#1335 @ 604,914: 18x11", "#1336 @ 686,134: 28x23", "#1337 @ 555,515: 11x19", "#1338 @ 562,677: 21x18", "#1339 @ 700,661: 13x14", "#1340 @ 416,795: 12x16", "#1341 @ 898,766: 27x25", "#1342 @ 294,752: 26x18", "#1343 @ 565,199: 24x17", "#1344 @ 463,263: 18x27", "#1345 @ 731,743: 20x11", "#1346 @ 797,103: 3x21", "#1347 @ 529,745: 26x27", "#1348 @ 754,765: 24x26", "#1349 @ 825,271: 13x24", "#1350 @ 904,109: 16x23", "#1351 @ 256,893: 11x16", "#1352 @ 947,236: 16x28", "#1353 @ 16,25: 17x10", "#1354 @ 964,569: 17x17", "#1355 @ 770,476: 25x28", "#1356 @ 108,786: 18x23", "#1357 @ 504,106: 6x3", "#1358 @ 389,956: 28x18", "#1359 @ 62,363: 10x23", "#1360 @ 121,205: 27x15", "#1361 @ 713,767: 18x16", "#1362 @ 971,536: 13x17", "#1363 @ 894,911: 24x3", "#1364 @ 2,591: 18x24", "#1365 @ 905,202: 28x11", "#1366 @ 306,844: 17x14", "#1367 @ 488,699: 27x18"];

let matrix = [];  
let claimIds = new Set();
let collidingClaims = new Set();  

input.forEach(item => {
  const matches = item.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);
  const claimId = parseInt(matches[1], 10);
  const x = parseInt(matches[2], 10);
  const y = parseInt(matches[3], 10);
  const width = parseInt(matches[4], 10);
  const height = parseInt(matches[5], 10);

  claimIds.add(claimId);

  for(let i = x; i < x + width; i++) {
    for(let j = y; j < y + height; j++) {
      if (!matrix[i]) {
        matrix[i] = [];
      }
      
      if (!matrix[i][j]) {
        matrix[i][j] = { lastClaimId: claimId, collision: false };
      } else {
        if (!matrix[i][j].collision) {
          collidingClaims.add(matrix[i][j].lastClaimId);
        }
        matrix[i][j] = { lastClaimId: claimId, collision: true };
        collidingClaims.add(claimId);
      }
    }
  }
});

const overlappingSquareInches = matrix.reduce((acc1, curr1) => {
  let overlap = curr1.reduce((acc2, curr2) => {
    return acc2 + (curr2.collision ? 1 : 0);
  }, 0);
  return acc1 + overlap;
}, 0);

console.log(overlappingSquareInches);

console.log([...claimIds].find(number => !collidingClaims.has(number)));
