sed 's/^/<p>/' $1 | sed 's/$/<\/p>/' | sed 's/\t//' - | sed 's/á/\&aacute;/g' | sed 's/é/\&eacute;/g' \
| sed 's/í/\&iacute;/g' | sed 's/ó/\&oacute;/g' | sed 's/ú/\&uacute;/g' | sed 's/ñ/\&ntilde;/g' \
| sed 's/¡/\&iexcl;/g' | sed 's/–/\&ndash;/g'

