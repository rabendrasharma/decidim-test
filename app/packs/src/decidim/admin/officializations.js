$(() => {
  const $modal = $("#show-email-modal");

  if ($modal.length === 0) {
    return
  }

  const $button1 = $("[data-open=user_email]", $modal);
  const $button2 = $("[data-open=phone_number]", $modal);
  const $email = $("#user_email", $modal);
  const $fullName = $("#user_full_name", $modal);
  const $phoneNumber = $("#phone_number", $modal);

  $("[data-toggle=show-email-modal]").on("click", (event) => {
    event.preventDefault()

    $button1.show()
    $button2.show()
    $button1.attr("data-open-url", event.currentTarget.href)
    $fullName.text($(event.currentTarget).data("full-name"))
    $email.html("")
  })
})
