// app/actions.ts
'use server';

export async function handleSubmit(formData: FormData) {
  const rawFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    id: formData.get('id') as string,
  };

  if (rawFormData.email === "a@a" && rawFormData.password === "b") {
    // 로그인 성공 시 id를 반환
    return { success: true, id: "success" };
  } else {
    return { success: false, error: '로그인 실패', id: "failled" };
  }
}
