hljs.registerLanguage("elixir",function(e){var r="[a-zA-Z_][a-zA-Z0-9_.]*(\\!|\\?)?",b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",n="and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0",c={cN:"subst",b:"#\\{",e:"}",l:r,k:n},i={cN:"string",c:[e.BE,c],v:[{b:/'/,e:/'/},{b:/"/,e:/"/}]},a={cN:"function",bK:"def defp defmacro",e:/\B\b/,c:[e.inherit(e.TM,{b:r,endsParent:!0})]},l=e.inherit(a,{cN:"class",bK:"defimpl defmodule defprotocol defrecord",e:/\bdo\b|$|;/}),s=[i,e.HCM,l,a,{b:"::"},{cN:"symbol",b:":(?![\\s:])",c:[i,{b:b}],r:0},{cN:"symbol",b:r+":(?!:)",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"->"},{b:"("+e.RSR+")\\s*",c:[e.HCM,{cN:"regexp",i:"\\n",c:[e.BE,c],v:[{b:"/",e:"/[a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];return c.c=s,{l:r,k:n,c:s}});