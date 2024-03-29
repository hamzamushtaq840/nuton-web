import Link from "next/link";
import Layout from "../components/layout/Layout";
import ProfileWidget from './../components/elements/ProfileWidget';
import TopPerfomingWidget from "./../components/elements/TopPerformingWidget";
function Profile() {
	return (
		<>
			<Layout
				headTitle="Profile"
				pageTitle="Profile"
				pageTitleSub={"Welcome to Edunet Profile page"}
				pageClass={"dashboard"}
				parent={"Home"}
				child={"Profile"}
			>
				<div className="row">
					<div className="col-xl-8">
						<div className="row">
							<div className="col-xxl-6 col-xl-6 col-lg-6">
								<div className="card welcome-profile">
									<div className="card-body">
										<div className="d-flex align-items-center mb-10">
											<img
												src="./images/avatar/1.png"
												alt=""
												className="me-16 rounded-circle"
												width="75"
											/>
											<div>
												<h4 className="mb-2">
													Fiaz Abdullah
												</h4>
												<p className="text-dark mb-1">
													UI Designer
												</p>
												<p className="mb-0">
													michale.collin@gmail.com
												</p>
											</div>
										</div>

										<ul>
											<li>
												<span className="verified">
													<i className="ri-check-line"></i>
												</span>
												Verify account
											</li>
											<li>
												<span className="not-verified">
													<i className="ri-shield-check-line"></i>
												</span>
												Two-factor authentication
												(2FA)
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xxl-6 col-xl-6 col-lg-6">
								<div className="card">
									<div className="card-body">
										<div className="app-link">
											<h5>
												Get Verified On Our Mobile App
											</h5>
											<p>
												Verifying your identity on our
												mobile app more secure, faster,
												and reliable.
											</p>

											<img
												src="./images/android.svg"
												alt=""
											/>
											<br />
											<div className="mt-16"></div>
											<img
												src="./images/apple.svg"
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xxl-12">
								<div className="card">
									<div className="card-header">
										<h4 className="card-title">
											Information{" "}
										</h4>
										<Link href="/settings-profile">
											Edit
										</Link>
									</div>
									<div className="card-body">
										<form className="row">
											<div className="col-lg-6 col-md-6">
												<div className="user-info">
													<span>USER ID</span>
													<h5>818778</h5>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="user-info">
													<span>USER NAME</span>
													<h5>faiyaz_abdullah</h5>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="user-info">
													<span>EMAIL ADDRESS</span>
													<h5>email@example.com</h5>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="user-info">
													<span>ADDRESS</span>
													<h5>125 Govt College Street, Monohorpur</h5>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="user-info">
													<span>POST CODE</span>
													<h5>3583</h5>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="user-info">
													<span>CITY</span>
													<h5>Cumilla</h5>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="user-info">
													<span>
														COUNTRY OF RESIDENCE
													</span>
													<h5>Bangladesh</h5>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="user-info">
													<span>JOINED SINCE</span>
													<h5>20/10/2020</h5>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="user-info">
													<span>WEB SITE</span>
													<h5>http://codeefly.com</h5>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="user-info">
													<span>TYPE</span>
													<h5>Personal</h5>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4">
						<div className="row">
							<div className="col-12">
								<div className="card transparent">
									<div className="row card-body">
										<ProfileWidget />
									</div>
								</div>
								<div className="g-discussion"></div>
							</div>

							<div className="col-12">
								<div className="card transparent">
									<div className="card-header">
										<h4 className="card-title">
											Top Performance Courses
										</h4>
									</div>
									<div className="card-body">
										<div className="row g-discussion-inner">
											<TopPerfomingWidget />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
export default Profile;
