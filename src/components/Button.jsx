const Button = ({name, style, fn}) => {
  return (
    <>
        <button
            type="button"
            className={style}
            onClick={fn}
        >
            {name}
        </button>
    </>
  )
}

export default Button