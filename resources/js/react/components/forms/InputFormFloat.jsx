import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import { FormGroup, Input, Label } from "reactstrap";

/**
 * Champ avec le label flottant le
 * En forward les reference contrôlé
 * Lien pour les champs contrôlé: https://react-hook-form.com/api/usecontroller/controller/#main
 */
const InputFormFloat = forwardRef((props, ref) => {
    const {
        name,
        type,
        size,
        className,
        labelName,
        placeholder,
        disabled,
        isSubmit,
        errors,
        control,
        required = true,
    } = props;

    /**
     * Vérifie si c'est le champ est valide
     * et afficher la classe avec l'erreur.
     */
    const isInvalid = !isSubmit && errors ? "is-invalid" : "";
    const checkClassName = className !== undefined ? className : "";
    const splitLabel = labelName.split(" ").join("");

    return (
        <FormGroup floating>
            <Controller
                name={name}
                control={control}
                rules={{ required: required }}
                render={({ field: { onChange, onBlur, value, name, ref } }) => {
                    return (
                        <Input
                            type={type}
                            name={name}
                            bsSize={size}
                            innerRef={ref}
                            onBlur={onBlur} // notify when input is touched
                            onChange={onChange}
                            id={`float${splitLabel}`}
                            placeholder={placeholder}
                            className={`${checkClassName} ${isInvalid}`}
                            disabled={disabled}
                        />
                    );
                }}
            />

            <Label for={`float${splitLabel}`} className="fw-bold-5">
                {labelName}
            </Label>
            {!isSubmit
                ? errors && <div className="invalid-feedback">{errors}</div>
                : ""}
        </FormGroup>
    );
});

export default InputFormFloat;
